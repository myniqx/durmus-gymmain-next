import { type NextRequest, NextResponse } from "next/server"
import { fetchLanguage } from "@/lib/services/languageService"

interface LanguageRouteProps {
  params: {
    code: string
  }
}

export async function GET(request: NextRequest, { params }: LanguageRouteProps) {
  try {
    const translations = await fetchLanguage((await params).code)

    if (!translations || Object.keys(translations).length === 0) {
      return NextResponse.json({ message: "Language not found" }, { status: 404 })
    }

    return NextResponse.json(translations)
  } catch (error) {
    return NextResponse.json({ error: "Error fetching language" }, { status: 500 })
  }
}
