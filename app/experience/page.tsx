import Navigation from "@/components/navigation"
import SocialIcons from "@/components/social-icons"
import TypewriterSpan from "@/components/typewriter"

export default function Experience() {
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
      <TypewriterSpan />

      <Navigation />

      <div className="mt-12 text-left w-full">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">SOC Analyst</h3>
          <p className="text-accent">PSY9 Security PVT LTD 2023-Present</p>
          <ul className="list-disc list-inside mt-2">
            <li>Monitor Security Alerts: Continuously monitor security alerts and events from SIEM systems, intrusion detection systems, firewalls, and antivirus tools.
            </li>
            <li>Incident Detection and Response: Investigate suspicious activities, assess severity, and escalate as needed. Provide timely responses to mitigate threats.
            </li>
            <li>Incident Documentation: Document incidents and investigation steps for reporting, analysis, and compliance.
            </li>
            <li>Perform Root Cause Analysis: Investigate the root cause of incidents and recommend strategies to prevent future attacks.
            </li>
            <li>Build a Security Operations Center (SOC): Design and implement SOC infrastructure, including hardware, software, workflows, and monitoring processes tailored to the company’s needs.

            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">Cybersecurity Intern</h3>
          <p className="text-accent">Tech Defense, June 2023 - August 2023</p>
          <ul className="list-disc list-inside mt-2">
            <li>During my internship at Tech Defense, I gained hands-on experience identifying and mitigating cyberattacks through labs focused on the OWASP Top 10 vulnerabilities, including SQL injection and XSS.</li>

            <li> This training enhanced my skills in penetration testing, vulnerability assessment, and secure coding practices.</li>



          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">Cybersecurity Intern</h3>



          <p className="text-accent">Cyber Secured India, April 2023-June 2023</p>
          <ul className="list-disc list-inside mt-2">
            <li>During my internship at Cyber Secured India, I completed hands-on labs using PortSwigger, TryHackMe, and Let's Defend, focusing on VAPT and SOC skills.</li>
            <li> I gained practical experience in vulnerability assessments, penetration testing, and incident response.</li>
          </ul>
        </div>
      </div>

      <SocialIcons />
    </main>
  )
}

