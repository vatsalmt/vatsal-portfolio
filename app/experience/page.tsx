import Navigation from "@/components/navigation"
import SocialIcons from "@/components/social-icons"

export default function Experience() {
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Vishvam Anjaria</h1>
      <p className="text-xl mb-8">
        I'm <span className="text-accent">Hacker</span>
      </p>

      <Navigation />

      <div className="mt-12 text-left w-full">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">Senior Security Engineer</h3>
          <p className="text-accent">Company Name, 2022-Present</p>
          <ul className="list-disc list-inside mt-2">
            <li>Lead penetration testing efforts for critical web applications and infrastructure</li>
            <li>Develop and implement security policies and procedures</li>
            <li>Conduct security awareness training for development and operations teams</li>
            <li>Perform code reviews to identify security vulnerabilities</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">Cybersecurity Analyst</h3>
          <p className="text-accent">Company Name, 2020-2022</p>
          <ul className="list-disc list-inside mt-2">
            <li>Performed vulnerability assessments and security audits</li>
            <li>Monitored security incidents and coordinated response efforts</li>
            <li>Implemented security tools and technologies to enhance protection</li>
            <li>Collaborated with development teams to integrate security into SDLC</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">Security Intern</h3>
          <p className="text-accent">Company Name, 2019-2020</p>
          <ul className="list-disc list-inside mt-2">
            <li>Assisted in vulnerability scanning and remediation</li>
            <li>Researched emerging security threats and mitigation strategies</li>
            <li>Developed scripts to automate security testing processes</li>
            <li>Participated in incident response simulations</li>
          </ul>
        </div>
      </div>

      <SocialIcons />
    </main>
  )
}

