import { Link } from '@/app/components'

export default function Contact({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <Link href={href} target="_blank">
      {children}
    </Link>
  )
}
