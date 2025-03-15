import Navigation from "@/components/navigation"
import SocialIcons from "@/components/social-icons"
import TypewriterSpan from "@/components/typewriter"

export default function Education() {
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
      <TypewriterSpan />

      <Navigation />

      <div className="mt-12 text-left w-full">
        <h2 className="text-2xl font-bold mb-6">Education</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">Master of Science in Cybersecurity</h3>
          <p className="text-accent">Illinois Institute of Technology, 2025-2027</p>
          <p className="mt-2">
            Specialized in network security, cryptography, and ethical hacking. Completed thesis on advanced penetration
            testing methodologies for cloud environments.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
          <p className="text-accent">Silver Oak University, 2021-2025</p>
          <p className="mt-2">
            Focused on programming, data structures, algorithms, and computer networks. Participated in multiple CTF
            competitions and security hackathons.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">Certifications</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Certified Ethical Hacker (CEH)</li>
            <li>Offensive Security Certified Professional (OSCP)</li>
            <li>CompTIA Security+</li>
            <li>Certified Information Systems Security Professional (CISSP)</li>
          </ul>
        </div>
      </div>

      <SocialIcons />
    </main>
  )
}

