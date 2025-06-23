import { type NextRequest, NextResponse } from "next/server"
import { fetchLanguage } from "@/lib/services/languageService"

import en from "@/locales/en.json"
import tr from "@/locales/tr.json"
import nl from "@/locales/nl.json"

interface LanguageRouteProps {
  params: {
    code: string
  }
}

export async function GET(request: NextRequest, { params }: LanguageRouteProps) {
  try {
    const code = (await params).code
    const translations = code === "tr" ? tr : code === "nl" ? nl : en

    return NextResponse.json(translations)
  } catch (error) {
    return NextResponse.json({ error: "Error fetching language" }, { status: 500 })
  }
}
