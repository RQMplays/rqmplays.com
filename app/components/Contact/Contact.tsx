import styles from './Contact.module.css'
import { Link } from '@/app/components'

export default function Contact({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <Link className={styles.contact} href={href} target="_blank">
      {children}
    </Link>
  )
}
