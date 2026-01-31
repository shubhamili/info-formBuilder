import mongoose, { Schema } from "mongoose";

const formResponseSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    formId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'form',
        required: true
    },
    formVersion: {
        type: Number,
        required: true,
    },
    responseData: {
        type: Schema.Types.Mixed,
        required: true
    }

}, { timestamps: true });

export const FormResponse = mongoose.model(
    "FormResponse",
    formResponseSchema
);
