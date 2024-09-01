import { useRouter } from 'next/router'

export function Button(props: any) {
  const { href, children, color, className } = props
  const route = useRouter()
  const handleClick = () => {
    if (href === 'refresh') {
      window.location.reload()
    } else {
      route.push(href)
    }
  }
  let buttonColor

  if (color === 'red-100') {
    buttonColor =
      'outline-red-100 hover:outline-red-100 bg-red-100 hover:text-red-100'
  } else if (color === 'red-200') {
    buttonColor =
      'outline-red-200 hover:outline-red-200 bg-red-200 hover:text-red-200'
  } else if (color === 'red-300') {
    buttonColor =
      'outline-red-300 hover:outline-red-300 bg-red-300 hover:text-red-300'
  } else if (color === 'red-400') {
    buttonColor =
      'outline-red-400 hover:outline-red-400 bg-red-400 hover:text-red-400'
  } else if (color === 'blue-100') {
    buttonColor =
      'outline-blue-100 hover:outline-blue-100 bg-blue-100 hover:text-blue-100'
  } else if (color === 'blue-200') {
    buttonColor =
      'outline-blue-200 hover:outline-blue-200 bg-blue-200 hover:text-blue-200'
  } else if (color === 'blue-300') {
    buttonColor =
      'outline-blue-300 hover:outline-blue-300 bg-blue-300 hover:text-blue-300'
  }
  return (
    <button
      className={`outline-3 relative h-fit w-fit px-[16px] py-[12px] font-roboto leading-[16px] text-white outline -outline-offset-2 duration-300 hover:bg-white ${buttonColor} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
