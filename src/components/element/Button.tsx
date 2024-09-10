import { useRouter } from 'next/router'

export function Button(props: any) {
  const { href, children, className } = props
  const route = useRouter()
  const handleClick = () => {
    if (href === 'refresh') {
      window.location.reload()
    } else {
      route.push(href)
    }
  }

  return (
    <button
      className={`relative font-roboto duration-300 ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
