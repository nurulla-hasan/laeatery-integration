'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ href, title }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`text-[14px] text-[#333333bb] hover:text-black cursor-pointer ${isActive ? "underline underline-offset-4" : ""}`}
    >
      <span className="text-sm font-medium">{title}</span>
    </Link>
  )
}
