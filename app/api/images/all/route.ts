import { NextResponse } from "next/server"
import { getImagesFromDB, isImageDataReady } from "@/lib/services/imageService"
import { fetchAndStoreImages } from "@/lib/imageService"

export async function GET() {
  await fetchAndStoreImages()

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
