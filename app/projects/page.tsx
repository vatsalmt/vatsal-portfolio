import Navigation from "@/components/navigation"
import SocialIcons from "@/components/social-icons"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Vatsal Trivedi</h1>
      <p className="text-xl mb-8">
        I'm <span className="text-accent">Hacker</span>
      </p>

      <Navigation />

      <div className="mt-12 text-left w-full">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-800 rounded-lg p-5 hover:border-accent transition-colors">
            <h3 className="text-xl font-semibold mb-2">Vulnerability Scanner</h3>
            <p className="text-gray-300 mb-4">
              An automated tool for identifying security vulnerabilities in web applications and networks.
            </p>
            <div className="flex gap-4 mt-auto">
              <Link href="https://github.com/" className="flex items-center gap-1 text-accent hover:underline">
                <Github size={16} /> Code
              </Link>
              <Link href="#" className="flex items-center gap-1 text-accent hover:underline">
                <ExternalLink size={16} /> Demo
              </Link>
            </div>
          </div>

          <div className="border border-gray-800 rounded-lg p-5 hover:border-accent transition-colors">
            <h3 className="text-xl font-semibold mb-2">Secure Coding Guide</h3>
            <p className="text-gray-300 mb-4">
              A comprehensive guide for developers on secure coding practices across multiple programming languages.
            </p>
            <div className="flex gap-4 mt-auto">
              <Link href="https://github.com/" className="flex items-center gap-1 text-accent hover:underline">
                <Github size={16} /> Code
              </Link>
              <Link href="#" className="flex items-center gap-1 text-accent hover:underline">
                <ExternalLink size={16} /> Demo
              </Link>
            </div>
          </div>

          <div className="border border-gray-800 rounded-lg p-5 hover:border-accent transition-colors">
            <h3 className="text-xl font-semibold mb-2">Network Intrusion Detection</h3>
            <p className="text-gray-300 mb-4">
              A machine learning-based system for detecting and alerting on suspicious network activities.
            </p>
            <div className="flex gap-4 mt-auto">
              <Link href="https://github.com/" className="flex items-center gap-1 text-accent hover:underline">
                <Github size={16} /> Code
              </Link>
              <Link href="#" className="flex items-center gap-1 text-accent hover:underline">
                <ExternalLink size={16} /> Demo
              </Link>
            </div>
          </div>

          <div className="border border-gray-800 rounded-lg p-5 hover:border-accent transition-colors">
            <h3 className="text-xl font-semibold mb-2">Security CTF Platform</h3>
            <p className="text-gray-300 mb-4">
              A platform for hosting Capture The Flag competitions with various security challenges.
            </p>
            <div className="flex gap-4 mt-auto">
              <Link href="https://github.com/" className="flex items-center gap-1 text-accent hover:underline">
                <Github size={16} /> Code
              </Link>
              <Link href="#" className="flex items-center gap-1 text-accent hover:underline">
                <ExternalLink size={16} /> Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      <SocialIcons />
    </main>
  )
}

