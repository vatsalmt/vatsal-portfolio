"use client"

import { Typewriter } from "react-simple-typewriter"
import Navigation from "@/components/navigation"
import SocialIcons from "@/components/social-icons"

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
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Vatsal Trivedi</h1>
      <p className="text-xl mb-8">
        I'm a{" "}
        <span className="text-accent">
          <Typewriter
            words={skills}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </p>

      <Navigation />
      <SocialIcons />
    </main>
  )
}
