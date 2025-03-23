import Navigation from "@/components/navigation"
import SocialIcons from "@/components/social-icons"
import TypewriterSpan from "@/components/typewriter"

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
      <TypewriterSpan />

      <Navigation />

      <div className="mt-12 text-left w-full">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="mb-4">
        As a seasoned Cybersecurity Expert, I specialize in safeguarding complex IT environments through a comprehensive range of security services. With a strong foundation in Security Operations, I have honed my skills as a Security Operations Center (SOC) Analyst, where I have been responsible for monitoring, detecting, and mitigating security threats to ensure the integrity and confidentiality of critical systems and data.
          
        </p>
        <p className="mb-4">
          With a strong foundation in computer science and information security, I specialize in identifying and
          mitigating security risks in web applications, networks, and systems.
        </p>
        <p className="mb-4">
          My goal is to help organizations strengthen their security posture and protect their digital assets from
          potential threats.
        </p>
      </div>

      <SocialIcons />
    </main>
  )
}

