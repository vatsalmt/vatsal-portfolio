import Link from "next/link"
import { Linkedin, Instagram, MessageCircle, Phone, Mail, Twitter } from "lucide-react"

const socialLinks = [
  { icon: <Linkedin size={18} />, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: <Instagram size={18} />, href: "https://instagram.com/", label: "Instagram" },
  { icon: <MessageCircle size={18} />, href: "https://discord.com/", label: "Discord" },
  { icon: <Phone size={18} />, href: "https://wa.me/", label: "WhatsApp" },
  { icon: <Mail size={18} />, href: "mailto:example@example.com", label: "Email" },
  { icon: <Twitter size={18} />, href: "https://twitter.com/", label: "Twitter" },
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

