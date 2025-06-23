import axios from "axios"
import Image from "@/lib/models/Image"
import connectDB from "@/lib/mongodb"
import type { CategoryType } from "@/types"

const PEXELS_API_URL = process.env.PEXELS_API_URL || "https://api.pexels.com/v1/search"
const PEXELS_API_KEY = process.env.PEXELS_API_KEY
const PER_PAGE = Number.parseInt(process.env.PEXELS_PER_PAGE || "80")
const PAGE = Number.parseInt(process.env.PEXELS_PAGE || "1")

let isReady = false

const categoryMap: Record<string, CategoryType> = {
  pilates: "pilates",
  yoga: "yoga",
  "personal training": "personal",
  "fitness intro": "intro",
  "healthy diet": "diet",
  "training method": "method",
  "fitness assessment": "assessment",
  "custom workout plan": "customplan",
  "training session": "training",
  "progress tracking": "progresstracking",
}

export const getImages = async (): Promise<any[] | undefined> => {
  try {
    if (!PEXELS_API_KEY) {
      console.error("Pexels API key not found!")
      return
    }

    const imageList = []

    for (const [pexelsQuery, appCategory] of Object.entries(categoryMap)) {
      const response = await axios.get(PEXELS_API_URL, {
        headers: { Authorization: PEXELS_API_KEY },
        params: {
          query: pexelsQuery,
          per_page: PER_PAGE,
          page: PAGE,
        },
      })

      const images = response.data.photos.map((img: any) => ({
        ...img,
        category: appCategory,
      }))

      imageList.push(...images)
    }

    console.log("Images saved to DB with categories.")
    isReady = true

    return imageList
  } catch (error) {
    console.error("Error fetching and storing images:", error)
  }
}


export const getImagesFromDB = async () => {
  try {
    return await getImages()
  } catch (error) {
    console.error("Error fetching images from DB:", error)
    throw new Error("Failed to retrieve images")
  }
}

export const getImageByCategory = async (category: CategoryType) => {
  try {
    const images = await getImages()

    const filteredImage = images?.find((image) => image.category === category.toLowerCase())

    return filteredImage[0] || null
  } catch (error) {
    console.error("Error fetching image by category:", error)
    return null
  }
}
