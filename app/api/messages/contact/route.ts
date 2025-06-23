import { type NextRequest, NextResponse } from "next/server"
import Message from "@/lib/models/Message"
import connectDB from "@/lib/mongodb"
import { isValidEmail, isValidPhone } from "@/lib/utils"
import type { ContactFormData } from "@/types"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message }: ContactFormData = await request.json()

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 })
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json({ error: "Invalid phone number." }, { status: 400 })
    }

    await connectDB()
    const newMessage = new Message({ name, email, phone, message })
    await newMessage.save()

    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 201 })
  } catch (error) {
    console.error("Error saving message:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
