import styles from './Header.module.css'
import { LocaleSwitcher, Title, Contact } from '@/app/components'

export default function Header() {
  return (
    <header className={styles.header}>
      <Title>RQMplays</Title>
      <div className={styles.contact}>
        <Contact href="https://www.linkedin.com/in/benoit-rqm-laurent/">
          LinkedIn
        </Contact>
        <Contact href="https://github.com/RQMplays">Github</Contact>
        <Contact href="https://twitter.com/RQMplays">Twitter</Contact>
        <Contact href="https://www.instagram.com/rqmplays/">Instagram</Contact>
        <Contact href="mailto:benoit.jacques.felix@gmail.com">Mail</Contact>
        <LocaleSwitcher />
      </div>
    </header>
  )
}
