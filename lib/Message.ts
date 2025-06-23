import mongoose, { Schema, type Document } from "mongoose"
import type { Message as MessageType } from "@/types"

interface MessageDocument extends Omit<MessageType, "_id">, Document {}

const MessageSchema = new Schema<MessageDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true },
)

export default mongoose.models.Message || mongoose.model<MessageDocument>("Message", MessageSchema)
