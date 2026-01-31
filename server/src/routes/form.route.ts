import { Router } from "express";
import { createForm, getForm, submitFormResponse } from "../controllers/form.controller.js";



export const formRoute = Router();

formRoute.post('/create', createForm)
formRoute.get('/getAll', getForm)
formRoute.post('/submit', submitFormResponse)