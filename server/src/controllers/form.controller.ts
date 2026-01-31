import type { Request, Response } from "express";
import { form } from "../models/form.model.js";
import { FormResponse } from "../models/formResponse.model.js";

export const createForm = async (req: Request, res: Response) => {

    try {
        const { name, description, schema } = req.body;

        if (!name || !schema || !schema.fields?.length) {
            return res.status(400).json({
                success: false,
                message: "Form name and fields are required",
            });
        }

        const created = await form.create({
            name,
            description,
            schema,
            version: 1
        });

        return res.status(201).json({
            success: true,

            message: "form created",
            data: created
        })


    } catch (error: any) {
        console.error("error from create form :", error)
        return res.status(500).json({
            success: false,
            message: "server errror"
        })
    }

}

export const getForm = async (req: Request, res: Response) => {
    try {
        const allForms = await form.find().lean();

        if (allForms.length === 0) {
            return res.status(400).json({
                success: false,
                message: "no forms found"
            })
        }

        console.log("allForms", allForms);
        return res.status(200).json({
            success: false,
            message: "forms fetched",
            data: allForms
        })

    } catch (error: any) {
        console.error("error from get form :", error)
        return res.status(500).json({
            success: false,
            message: "server errror"
        })
    }

}

export const submitFormResponse = async (req: Request, res: Response) => {
    try {
        const { formId, email, responseData } = req.body;

        if (!email || !responseData) {
            return res.status(400).json({
                success: false,
                message: "Email and response data are required",
            });
        }

        const formDoc = await form.findById(formId);

        if (!formDoc || !formDoc.isActive) {
            return res.status(404).json({
                success: false,
                message: "Form not found or inactive",
            });
        }

        // 🔴 For now: skip validation
        // (we’ll add it next)

        const savedResponse = await FormResponse.create({
            email,
            formId: formDoc._id,
            formVersion: formDoc.version ?? 1,
            responseData,
        });

        return res.status(201).json({
            success: true,
            message: "Form submitted successfully",
            data: savedResponse,
        });

    } catch (error) {
        console.error("submit form error:", error);
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};
