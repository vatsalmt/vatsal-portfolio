import Navigation from "@/components/navigation"
import SocialIcons from "@/components/social-icons"

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Vatsal Trivedi</h1>
      <p className="text-xl mb-8">
        I'm <span className="text-accent">Hacker</span>
      </p>

      <Navigation />

      <div className="mt-12 text-left w-full">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="mb-4">
          Hello! I'm a passionate hacker and cybersecurity enthusiast with expertise in penetration testing,
          vulnerability assessment, and secure coding practices.
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

