import Navigation from "@/components/navigation"
import SocialIcons from "@/components/social-icons"
import TypewriterSpan from "@/components/typewriter"

export default function Education() {
  const educationData = [
    {
      title: "Masters in Cyber Forensics and Security (2025 - 2027)",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Illinois Institute of Technology
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
          The Master of Cyber Forensics and Security program focuses on cyber forensics, cybersecurity management, vulnerability analysis, and digital evidence handling. Courses include legal and ethical issues, cybercrime investigation, and hands-on training in risk management, network security, and IT auditing.
          </p>
        </div>
      ),
    },
    {
      title: "Bachelor of Technology in Computer Science (2021 - 2025)",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Silver Oak University
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Specialized in ethical hacking, penetration testing, digital forensics, and network security. Gained hands-on experience in ISMS, cloud security, cryptography, and vulnerability assessments.          </p>
        </div>
      ),
    },
    {
      title: "Certifications",
      content: (
        <ul className="list-disc list-inside text-neutral-200 text-xs md:text-sm font-normal">
          <li>Information Security Associate by Skillfront</li>
          <li>NSE-2 Network Security Associate
          by Fortinet</li>
          <li>Fundamentals of Security Operations Center
          by Palo Alto Networks</li>
          {/* <li>Certified Information Systems Security Professional (CISSP)</li> */}
        </ul>
      ),
    },
  ]

  return (
    <main className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-white">
      <TypewriterSpan />
      <Navigation />

      <div className="mt-12 text-left w-full">
        <h2 className="text-2xl font-bold mb-6">Education</h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 w-0.5 h-full bg-white" />

          {educationData.map((item, index) => (
            <div key={index} className="flex relative mb-8">
              {/* Timeline dot */}
              <div className="w-8 flex justify-center z-10">
                <div className="w-4 h-4 rounded-full border-2 border-accent  bg-white dark:bg-black" />
              </div>

              {/* Content container */}
              <div className="flex-1 pl-4">
                <h3 className="font-bold mb-2 text-lg text-accent">
                  {item.title}
                </h3>
                <div className="space-y-2 ">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SocialIcons />
    </main>
  )
}   