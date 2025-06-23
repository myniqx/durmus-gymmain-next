"use client"

import type React from "react"
import { createContext, useState, useEffect, useContext } from "react"
import type { AllTranslations } from "@/types"

interface LanguageContextType {
  selectedLang: string
  translations: AllTranslations
  changeLanguage: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: React.ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [selectedLang, setSelectedLang] = useState<string>("en")
  const [translations, setTranslations] = useState<AllTranslations>({})

  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLang") || "en"
    setSelectedLang(savedLang)
  }, [])

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/api/languages/${selectedLang}`)
        if (response.ok) {
          const fetchedTranslations = await response.json()
          setTranslations(fetchedTranslations)
        }
      } catch (error) {
        console.error("Error loading translations:", error)
      }
    }

    loadTranslations()
  }, [selectedLang])

  const changeLanguage = (lang: string) => {
    if (lang !== selectedLang) {
      setSelectedLang(lang)
      localStorage.setItem("selectedLang", lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ selectedLang, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
