import { Router } from "express";
import { sendInfo, sendMail } from "../controllers/sendMailController.js";
const route = Router();

route.post("/info", sendInfo.sendInfo);
route.post("/send-mail", sendMail.sendInfo);

export default route;
