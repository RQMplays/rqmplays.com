import styles from './Header.module.css'
import { LocaleSwitcher, Title, HeaderLink } from '@/app/components'

export default function Header() {
  return (
    <header className={styles.header}>
      <Title>RQMplays</Title>
      <div className={styles.contact}>
        <HeaderLink href="#contact">Contact</HeaderLink>
        <LocaleSwitcher />
      </div>
    </header>
  )
}
