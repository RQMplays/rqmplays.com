import styles from './HeaderLink.module.css'
import { Link } from '@/app/components'

export default function HeaderLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <Link className={styles.headerLink} href={href}>
      {children}
    </Link>
  )
}
