import Language from "@/lib/models/Language"
import connectDB from "@/lib/mongodb"
import type { AllTranslations } from "@/types"

export const fetchLanguage = async (langCode: string): Promise<AllTranslations> => {
  try {
    await connectDB()
    const language = await Language.findOne({ code: langCode })
    return language?.translations || {}
  } catch (error) {
    console.error(`Error fetching language (${langCode}):`, error)
    return {}
  }
}

export const getAllLanguages = async () => {
  try {
    await connectDB()
    const languages = await Language.find()
    return languages
  } catch (error) {
    console.error("Error fetching all languages:", error)
    return []
  }
}
