import axios from "axios"
import Image from "@/lib/models/Image"
import connectDB from "@/lib/mongodb"
import type { CategoryType } from "@/types"
import imageList from "@/constants/images.json"

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
  return imageList
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

    const filteredImage = images?.find((image) => image.category.localeCompare(category, "en", { ignoreCase: true, sensitivity: "base" }) === 0)

    return filteredImage || null
  } catch (error) {
    console.error("Error fetching image by category:", error)
    return null
  }
}
