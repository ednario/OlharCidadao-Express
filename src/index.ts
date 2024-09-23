import express from "express";
import { router } from "./app/sendMail/routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(process.env.APP_PORT, () => console.log(`Server is running on port ${process.env.APP_PORT}`));