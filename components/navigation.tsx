"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  // { name: "Projects", path: "/projects" },
  // { name: "Resume", path: "/resume" },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-wrap justify-center gap-6 mt-6">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`relative nav-link transition-colors duration-300 ${
            pathname === item.path ? "text-accent" : "text-white hover:text-accent"
          } before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-accent before:transition-all before:duration-300 before:ease-in-out hover:before:w-full`}
                >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

