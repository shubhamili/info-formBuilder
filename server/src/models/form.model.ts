import mongoose, { Schema } from "mongoose";

const formSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false
    },
    schema: {
        type: Schema.Types.Mixed,
        required: true
    },
    version: {
        type: Number,
        required: false

    },
    isActive: {
        type: Boolean,
        required: false,
        default: true
    }


}, { timestamps: true });

export const form = mongoose.model("form", formSchema)