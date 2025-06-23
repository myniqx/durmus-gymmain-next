import mongoose, { Schema, type Document } from "mongoose"
import type { Language as LanguageType } from "@/types"

interface LanguageDocument extends Omit<LanguageType, "_id">, Document {}

const LanguageSchema = new Schema<LanguageDocument>(
  {
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    translations: { type: Schema.Types.Mixed, required: true },
  },
  { timestamps: true },
)

export default mongoose.models.Language || mongoose.model<LanguageDocument>("Language", LanguageSchema)
