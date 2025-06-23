import { getImagesFromDB } from "@/lib/services/imageService"
import { NextResponse } from "next/server"

export async function GET() {

  try {
    const images = await getImagesFromDB()
    if (!images || images.length === 0) {
      return NextResponse.json({ message: "No images found in the database." }, { status: 404 })
    }
    return NextResponse.json(images)
  } catch (error) {
    console.error("Error retrieving images:", error)
    return NextResponse.json({ error: "Failed to retrieve images from database." }, { status: 500 })
  }
}
