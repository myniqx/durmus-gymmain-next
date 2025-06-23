"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/components/providers/LanguageProvider"

export const useTranslation = <T = any>(pageKey: string) => {
  const { selectedLang, translations } = useLanguage()
  const [pageTranslations, setPageTranslations] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    if (translations && translations[pageKey as keyof typeof translations]) {
      setPageTranslations(translations[pageKey as keyof typeof translations] as T)
    } else {
      setPageTranslations({} as T)
    }

    setIsLoading(false)
  }, [selectedLang, pageKey, translations])

  return { translations: pageTranslations, isLoading }
}
