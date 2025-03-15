"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-wrap justify-center gap-6 mt-6">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`nav-link ${pathname === item.path ? "active text-accent" : "text-white hover:text-accent"} transition-colors`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

