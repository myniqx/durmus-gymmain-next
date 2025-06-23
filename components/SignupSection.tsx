"use client"

import type React from "react"
import { useState } from "react"
import { postData } from "@/components/services/api"
import { clearMessageAfterDelay } from "@/lib/utils"
import type { HomePageTranslations, ContactFormData } from "@/types"
import styles from "@/styles/SignupSection.module.css"

interface SignupSectionProps {
  translations?: HomePageTranslations["signup"]
}

const SignupSection: React.FC<SignupSectionProps> = ({ translations }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [responseMessage, setResponseMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const emailRegex = /\S+@\S+\.\S+/
    const phoneRegex = /^\+?\d{7,15}$/

    if (!emailRegex.test(formData.email)) {
      setResponseMessage("Invalid email format.")
      return clearMessageAfterDelay(setResponseMessage)
    }

    if (!phoneRegex.test(formData.phone)) {
      setResponseMessage("Invalid phone number.")
      return clearMessageAfterDelay(setResponseMessage)
    }

    try {
      const { success, data } = await postData(`${BASE_URL}/api/messages/signup`, formData)

      if (success) {
        setResponseMessage(data.message)
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setResponseMessage(data.error || "Something went wrong.")
      }
    } catch (error) {
      console.error("API error:", error)
      setResponseMessage("Server error. Please try again later.")
    }

    clearMessageAfterDelay(setResponseMessage)
  }

  const handleWhatsAppClick = () => {
    const whatsappNumber = WHATSAPP_NUMBER || "31633820475"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      translations?.whatsappMessage || "Hello, I am interested!",
    )}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className={styles.signupSection}>
      <div className={styles.textSection}>
        <h2>{translations?.title || "Take the first step today."}</h2>
        <p>{translations?.description1 || "Looking for a personal trainer..."}</p>
        <p>{translations?.description2 || "Whether you want to get stronger..."}</p>
      </div>
      <div className={styles.formSection}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={translations?.namePlaceholder || "Your Name"}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={translations?.emailPlaceholder || "Your Email"}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder={translations?.phonePlaceholder || "Your Phone Number"}
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder={translations?.messagePlaceholder || "Your Comments"}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
            {translations?.sendButton || "Send"}
          </button>
          <button type="button" className={`${styles.btn} ${styles.btnSuccess}`} onClick={handleWhatsAppClick}>
            {translations?.whatsappButton || "Chat on WhatsApp"}
          </button>
        </form>
        {responseMessage && <p className={styles.responseMessage}>{responseMessage}</p>}
      </div>
    </div>
  )
}

export default SignupSection
