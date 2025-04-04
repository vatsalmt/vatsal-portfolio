import Link from "next/link"
import { 
  Linkedin,
  Twitter,
  Github,
  Gitlab 
} from "lucide-react"
import { SiGitbook } from "react-icons/si";


const socialLinks = [
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/vatsal-trivedi18/", label: "LinkedIn" },
  { icon: <Twitter size={18} />, href: "https://x.com/vatsaltrivedi20?s=21&t=b62kQEyAeiIsUbsY_EiUsA", label: "Twitter" },
  { icon: <Github size={18} />, href: "https://github.com/", label: "Github" },
  { icon: <SiGitbook size={18} />, href: "https://ahmsec.gitbook.io/ahmsec/", label: "GitBook" },
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

