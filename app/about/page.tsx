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
          My approach is proactive. I thrive on staying ahead of evolving threats and creating secure frameworks tailored to an organization's needs. Whether it's conducting risk assessments, implementing security protocols, or creating disaster recovery plans, I aim to provide solutions that not only defend against potential breaches but also ensure operational resilience.
        </p>
        <p className="mb-4">
        By continuously exploring the latest cybersecurity trends and best practices, I work to strengthen systems and minimize risks, allowing businesses to operate with confidence in today's digital landscape.
        </p>
      </div>

      <SocialIcons />
    </main>
  )
}

