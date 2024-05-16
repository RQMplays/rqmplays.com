import { Link } from '@/app/components'

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <Link href="/">
      <h1>{children}</h1>
    </Link>
  )
}
