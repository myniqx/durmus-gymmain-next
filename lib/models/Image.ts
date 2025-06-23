import mongoose, { Schema, type Document } from "mongoose"
import type { Image as ImageType } from "@/types"

interface ImageDocument extends Omit<ImageType, "_id">, Document {}

const ImageSchema = new Schema<ImageDocument>(
  {
    id: { type: Number, required: true },
    alt: { type: String, required: true },
    avg_color: { type: String, required: true },
    height: { type: Number, required: true },
    width: { type: Number, required: true },
    liked: { type: Boolean, default: false },
    photographer: { type: String, required: true },
    photographer_id: { type: Number, required: true },
    photographer_url: { type: String, required: true },
    src: {
      original: { type: String, required: true },
      large2x: { type: String, required: true },
      large: { type: String, required: true },
      medium: { type: String, required: true },
      small: { type: String, required: true },
      portrait: { type: String, required: true },
      landscape: { type: String, required: true },
      tiny: { type: String, required: true },
    },
    url: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true },
)

export default mongoose.models.Image || mongoose.model<ImageDocument>("Image", ImageSchema)
