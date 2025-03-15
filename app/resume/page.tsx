import Navigation from "@/components/navigation"
import SocialIcons from "@/components/social-icons"
import { Download } from "lucide-react"
import Link from "next/link"
import TypewriterSpan from "@/components/typewriter"

export default function Resume() {
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
      <TypewriterSpan />


      <Navigation />

      <div className="mt-12 text-left w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Resume</h2>
          <Link
            href="#"
            className="flex items-center gap-2 bg-accent text-background px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors"
          >
            <Download size={18} />
            Download PDF
          </Link>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">Summary</h3>
            <p>
              Experienced cybersecurity professional with expertise in penetration testing, vulnerability assessment,
              and secure coding practices. Proven track record of identifying and mitigating security risks in web
              applications, networks, and systems.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Technical Skills</h4>
                <ul className="list-disc list-inside">
                  <li>Penetration Testing</li>
                  <li>Vulnerability Assessment</li>
                  <li>Network Security</li>
                  <li>Web Application Security</li>
                  <li>Secure Coding</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Tools & Technologies</h4>
                <ul className="list-disc list-inside">
                  <li>Burp Suite, OWASP ZAP</li>
                  <li>Metasploit, Nmap</li>
                  <li>Wireshark, Snort</li>
                  <li>Python, Bash, PowerShell</li>
                  <li>Docker, Kubernetes</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Senior Security Engineer</h4>
                <p className="text-accent">Company Name | 2022-Present</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Lead penetration testing efforts for critical web applications</li>
                  <li>Develop and implement security policies and procedures</li>
                  <li>Conduct security awareness training for development teams</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium">Cybersecurity Analyst</h4>
                <p className="text-accent">Company Name | 2020-2022</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Performed vulnerability assessments and security audits</li>
                  <li>Monitored security incidents and coordinated response efforts</li>
                  <li>Implemented security tools to enhance protection</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Master of Science in Cybersecurity</h4>
                <p className="text-accent">University Name | 2020-2022</p>
              </div>

              <div>
                <h4 className="font-medium">Bachelor of Technology in Computer Science</h4>
                <p className="text-accent">University Name | 2016-2020</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">Certifications</h3>
            <ul className="list-disc list-inside">
              <li>Certified Ethical Hacker (CEH)</li>
              <li>Offensive Security Certified Professional (OSCP)</li>
              <li>CompTIA Security+</li>
              <li>Certified Information Systems Security Professional (CISSP)</li>
            </ul>
          </section>
        </div>
      </div>

      <SocialIcons />
    </main>
  )
}

