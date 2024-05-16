import { default as NativeLink } from 'next/link'
import styles from './Link.module.css'

export default function Link({
  children,
  href,
  target,
}: {
  children: React.ReactNode
  href: string
  target: string | undefined
}) {
  return (
    <NativeLink className={styles.link} href={href} target={target}>
      {children}
    </NativeLink>
  )
}
