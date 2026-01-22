import type { Request, Response } from "express";
import { form } from "../models/form.model.js";

export const createForm = async (req: Request, res: Response) => {

    try {
        const { name, description, schema, version } = req.body;

        if (!name || !description || !schema) {
            return res.status(400).json({
                success: false,
                message: "fill required fields",
            })
        }

        const created = await form.create({
            name, description, schema, version
        })


        // console.log("created", created);

        return res.status(201).json({
            success: false,
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