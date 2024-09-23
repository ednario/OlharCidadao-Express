import express from "express";

import { sendEmail} from "./app/sendMail/controller";

const app = express();

app.use(express.json());

app.listen(process.env.APP_PORT, () => console.log(`Server is running on port ${process.env.APP_PORT}`));

app.get("/", (req, res) => {
  res.send("Hello World");
})

app.post("/send-email", (req, res) => {
  const { to, subject, body } = req.body;
  sendEmail(to, subject, body);
  res.send("Email sent");
})