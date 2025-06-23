import { type NextRequest, NextResponse } from "next/server"
import { getImageByCategory, isImageDataReady } from "@/lib/services/imageService"
import type { CategoryType } from "@/types"

const validCategories: CategoryType[] = [
  "pilates",
  "yoga",
  "personal",
  "intro",
  "diet",
  "method",
  "assessment",
  "customplan",
  "training",
  "progresstracking",
]

export async function GET(request: NextRequest) {
  try {
    if (!isImageDataReady()) {
      return NextResponse.json({ error: "Images are still being prepared. Try again shortly." }, { status: 503 })
    }

    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")

    if (!category) {
      return NextResponse.json({ error: "Category is required" }, { status: 400 })
    }

    const lowerCategory = category.toLowerCase() as CategoryType
    if (!validCategories.includes(lowerCategory)) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 })
    }

    const randomImage = await getImageByCategory(lowerCategory)

    if (!randomImage) {
      return NextResponse.json({ error: "No images found for this category" }, { status: 404 })
    }

    return NextResponse.json(randomImage)
  } catch (error) {
    console.error("Error fetching image:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
