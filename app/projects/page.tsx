import Navigation from "@/components/navigation"
import SocialIcons from "@/components/social-icons"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import TypewriterSpan from "@/components/typewriter"

export default function Projects() {
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
      <TypewriterSpan />

      <Navigation />

      <div className="mt-12 text-left w-full">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


          <div className="border border-gray-800 rounded-lg p-5 hover:border-accent transition-colors">
            <h3 className="text-xl font-semibold mb-2"> SIEM Tool integration </h3>
            <p className="text-gray-300 mb-4">
            Threat Detection & Response Detect intrusions, malware, or unauthorized access.
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
        </div>

      </div>

      <SocialIcons />
    </main>
  )
}

