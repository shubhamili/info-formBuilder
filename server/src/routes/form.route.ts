import { Router } from "express";
import { createForm, getForm } from "../controllers/form.controller.js";



export const formRoute = Router();

formRoute.post('/create', createForm)
formRoute.get('/getAll', getForm)