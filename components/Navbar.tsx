"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useLanguage } from "@/components/providers/LanguageProvider"
import styles from "@/styles/Navbar.module.css"

type NavBarProps = {}

const NavBar: React.FC<NavBarProps> = () => {
  const { selectedLang, changeLanguage } = useLanguage()
  const pathname = usePathname()

  const isActive = (path: string): string => (pathname === path ? styles.active : "")

  const navItems = [
    { href: "/personal-training", key: "personalTraining" },
    { href: "/pilates", key: "pilates" },
    { href: "/diet", key: "diet" },
    { href: "/about", key: "about" },
    { href: "/method", key: "method" },
    { href: "/contact", key: "contact" },
    { href: "/yoga", key: "yoga" },
  ]

  const translations = {
    personalTraining:
      selectedLang === "en" ? "Personal Training" : selectedLang === "nl" ? "Personal Training" : "Kişisel Antrenman",
    pilates: "Pilates",
    diet: selectedLang === "en" ? "Diet" : selectedLang === "nl" ? "Dieet" : "Diyet",
    about: selectedLang === "en" ? "About Us" : selectedLang === "nl" ? "Over ons" : "Hakkımızda",
    method: selectedLang === "en" ? "Method" : selectedLang === "nl" ? "Methode" : "Yöntem",
    contact: selectedLang === "en" ? "Contact" : selectedLang === "nl" ? "Contact" : "İletişim",
    yoga: "Yoga",
    freeTrial: selectedLang === "en" ? "Free Trial" : selectedLang === "nl" ? "Gratis proefles" : "Ücretsiz Deneme",
    login: selectedLang === "en" ? "Login" : selectedLang === "nl" ? "Inloggen" : "Giriş",
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href="/">
          <Image src="/logo.png" alt="DurmusGym Logo" width={50} height={50} className={styles.navbarLogo} />
        </Link>
        <Link href="/" className={styles.brandName}>
          DurmusGym
        </Link>
      </div>

      <ul className={styles.navbarLinks}>
        {navItems.map(({ href, key }) => (
          <li key={href} className={isActive(href)}>
            <Link href={href}>{translations[key as keyof typeof translations]}</Link>
          </li>
        ))}
        <li className={`${isActive("/free-trial-page")} ${styles.cta}`}>
          <Link href="/free-trial-page">{translations.freeTrial}</Link>
        </li>
        <li className={isActive("/login")}>
          <Link href="/login">{translations.login}</Link>
        </li>

        <li className={styles.languageSwitcher}>
          <button className={selectedLang === "en" ? styles.active : ""} onClick={() => changeLanguage("en")}>
            EN
          </button>
          <button className={selectedLang === "nl" ? styles.active : ""} onClick={() => changeLanguage("nl")}>
            NL
          </button>
          <button className={selectedLang === "tr" ? styles.active : ""} onClick={() => changeLanguage("tr")}>
            TR
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
