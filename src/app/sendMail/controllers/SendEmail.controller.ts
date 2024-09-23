import { Request, Response } from "express";

import { sendEmail } from "../services/SendEmail.service";

import { IEmail } from "../entities/Email";

export const sendEmailController = (req: Request, res: Response) => {
  try {
    const { to, subject, body, cid } = req.body;
    const { filename, path } = req.file;

    const email: IEmail = {
      to,
      subject,
      body,
      filename,
      path,
      cid
    };

    sendEmail(email);
    res.send("Email sent successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};