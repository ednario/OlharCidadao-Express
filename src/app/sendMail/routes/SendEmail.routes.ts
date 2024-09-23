import { Router } from "express";
import multer from "multer";

import { sendEmailController } from "../controllers/SendEmail.controller";

import { storage } from "../../../utils/storageMulter";

const sendEmailRoutes = Router();

sendEmailRoutes.post("/send", multer({ storage }).single("file"), sendEmailController);

export { sendEmailRoutes };