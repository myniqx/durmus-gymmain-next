import { NextResponse } from "next/server"
import { getImagesFromDB, isImageDataReady } from "@/lib/services/imageService"

export async function GET() {
  if (!isImageDataReady()) {
    return NextResponse.json({ message: "Images are still being fetched, please try again later." }, { status: 503 })
  }

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
