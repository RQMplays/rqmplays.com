import { default as NativeLink } from 'next/link'
import styles from './Link.module.css'

export default function Link({
  children,
  href,
  target,
  className,
}: {
  children: React.ReactNode
  className: string | undefined
  href: string
  target: string | undefined
}) {
  return (
    <NativeLink
      className={`${styles.link} ${className}`}
      href={href}
      target={target}
    >
      {children}
    </NativeLink>
  )
}
