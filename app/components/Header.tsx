import Link from 'next/link'
import LocaleSwitcher from '@/app/components/LocaleSwitcher'

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1>RQMplays</h1>
      </Link>
      <LocaleSwitcher />
    </header>
  )
}
