import type { Image, CategoryType } from "@/types"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export const fetchImages = async (category: CategoryType, limit?: number): Promise<Image[]> => {
  try {
    const params = new URLSearchParams({ category })
    if (limit) params.append("limit", limit.toString())

    const response = await fetch(`${BASE_URL}/api/images?${params}`)

    if (!response.ok) {
      throw new Error("Failed to fetch images")
    }

    const image = await response.json()
    return image ? [image] : []
  } catch (error) {
    console.error("Error fetching images:", error)
    return []
  }
}
