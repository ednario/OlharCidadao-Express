import { Router } from "express";
import { sendEmailRoutes } from "./SendEmail.routes";

const router = Router();

router.use("/email", sendEmailRoutes);

export { router };