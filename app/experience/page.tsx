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
          <p className="text-accent">PSY9 Security PVT LTD., 2023-Present</p>
          <ul className="list-disc list-inside mt-2">
            <li>Monitor Security Alerts: Continuously monitor security alerts and events from SIEM systems, intrusion detection systems, firewalls, and antivirus tools.</li>
            <li>Incident Detection and Response: Investigate suspicious activities, assess severity, and escalate as needed. Provide timely responses to mitigate threats.</li>
            <li>Incident Documentation: Document incidents and investigation steps for reporting, analysis, and compliance.</li>
            <li>Perform Root Cause Analysis: Investigate the root cause of incidents and recommend strategies to prevent future attacks.</li>
            <li>Build a Security Operations Center (SOC): Design and implement SOC infrastructure, including hardware, software, workflows, and monitoring processes tailored to the company’s needs.</li>
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
          <h3 className="text-xl font-semibold">Cyber Security Intern</h3>
          <p className="text-accent">Cyber-Secured India, May 2023- July 2023</p>
          <ul className="list-disc list-inside mt-2">
            <li>Practice in vulnerability scanning and remediation</li>
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

