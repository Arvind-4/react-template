export default function Image(src: any, alt: string) {
  return (
    <img
      className='fill-blue-500 hover:text-blue-100'
      height='40px'
      src={src.src}
      aria-label={alt}
      about={alt}
      alt={alt}
      width='40px'
    />
  )
}
