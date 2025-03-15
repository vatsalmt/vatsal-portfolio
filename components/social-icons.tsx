import Link from "next/link"
import { 
  Linkedin,
  Twitter,
  Github,
  Gitlab 
} from "lucide-react"



const socialLinks = [
  { icon: <Linkedin size={18} />, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: <Twitter size={18} />, href: "https://twitter.com/", label: "Twitter" },
  { icon: <Github size={18} />, href: "https://twitter.com/", label: "Github" },
  { icon: <Gitlab size={18} />, href: "https://twitter.com/", label: "Gitlab" },
]

export default function SocialIcons() {
  return (
    <div className="flex gap-4 mt-8">
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="social-icon"
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  )
}

