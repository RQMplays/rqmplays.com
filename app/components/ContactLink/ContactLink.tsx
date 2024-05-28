import styles from './ContactLink.module.css'
import { Link } from '@/app/components'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactLink({
  href,
  icon,
  children,
}: {
  children: React.ReactNode
  href: string
  icon?: IconProp
}) {
  return (
    <Link className={styles.contactLink} href={href} target="_blank">
      {icon && <FontAwesomeIcon icon={icon} size="lg" />}
      {children}
    </Link>
  )
}
