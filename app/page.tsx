"use client"

import Navigation from "@/components/navigation"
import SocialIcons from "@/components/social-icons"
import TypewriterSpan from "@/components/typewriter"

export default function Home() {
  const skills = [
    "Cyber Security Researcher",
    "Cyber Security Analyst",
    "System Administrator",
    "Cloud Security Analyst",
    "Security Engineer",
    "Network Engineer"
  ]
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center">
      <TypewriterSpan />
      <Navigation />
      <SocialIcons />
    </main>
  )
}
