"use client"

import type React from "react"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { useLanguage } from "@/components/providers/LanguageProvider"
import styles from "@/styles/Footer.module.css"

type FooterProps = {}

const Footer: React.FC<FooterProps> = () => {
  const { selectedLang } = useLanguage()

  const translations = {
    location: selectedLang === "en" ? "Location" : selectedLang === "nl" ? "Locatie" : "Konum",
    addressLine1: "Moregrebstraat 56",
    addressLine2: "Bergen op Zoom, 4622JD",
    socials: selectedLang === "en" ? "Social Media" : selectedLang === "nl" ? "Sociale media" : "Sosyal Medya",
    contact: selectedLang === "en" ? "Contact" : selectedLang === "nl" ? "Contact" : "İletişim",
    email: "info@durmusgym.nl",
    phone: "+31 6 33820475",
    gymName: "DurmusGym",
    chamberOfCommerce:
      selectedLang === "en"
        ? "Chamber of Commerce No: 1111111"
        : selectedLang === "nl"
          ? "KvK-nummer: 1111111"
          : "Ticaret Odası No: 1111111",
  }

  return (
    <footer className={styles.footerContainer}>
      <div className={`${styles.footerContent} ${styles.footerCentered}`}>
        <div className={styles.footerSection}>
          <h3>{translations.location}</h3>
          <p>{translations.addressLine1}</p>
          <p>{translations.addressLine2}</p>
        </div>

        <div className={styles.footerSection}>
          <h3>{translations.socials}</h3>
          <div className={styles.footerIcons}>
            <a
              href="https://www.instagram.com/mustafaboz2357"
              className={`${styles.socialIcon} ${styles.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/31633820475"
              className={`${styles.socialIcon} ${styles.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>{translations.contact}</h3>
          <p>{translations.email}</p>
          <p>{translations.phone}</p>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        &copy; 2025 {translations.gymName} - {translations.chamberOfCommerce}
      </div>
    </footer>
  )
}

export default Footer
