FROM node:18-alpine AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN apk add --no-cache autoconf automake libtool nasm build-base zlib-dev
RUN npm install pnpm -g
RUN pnpm install
COPY . .
RUN pnpm build

FROM nginx:alpine AS runtime
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80/tcp

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]