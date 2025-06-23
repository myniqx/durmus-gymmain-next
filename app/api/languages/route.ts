import { NextResponse } from "next/server"
import { getAllLanguages } from "@/lib/services/languageService"
import Language from "@/lib/models/Language"
import connectDB from "@/lib/mongodb"

export async function GET() {
  try {
    const languages = await getAllLanguages()
    return NextResponse.json(languages)
  } catch (error) {
    return NextResponse.json({ error: "Error fetching languages" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { code, name, translations } = await request.json()

    await connectDB()
    const newLanguage = new Language({ code, name, translations })
    await newLanguage.save()

    return NextResponse.json({ message: "Language added successfully" }, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: "Error adding language", details: error.message }, { status: 500 })
  }
}
