import styles from './Title.module.css'
import { Link } from '@/app/components'

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <Link href="/">
      <h1 className={styles.title}>{children}</h1>
    </Link>
  )
}
