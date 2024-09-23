import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

import { IEmail } from '../entities/Email';

dotenv.config();

const smtpConfig = {
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: true,
  auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
  }
};

export const sendEmail = (email: IEmail) => {
  const transporter = nodemailer.createTransport(smtpConfig);

  const send = () => {
    transporter.sendMail({
      from: process.env.MAIL_USER,
      to: email.to,
      subject: email.subject,
      attachments: [
        {
          filename: email.filename,
          path: email.path,
          cid: email.cid
        }
      ],
      text: email.body,
    });

    transporter.verify((error) => {
      if (error) {
        console.error('Error verifying SMTP transporter:', error);
      } else {
        console.log('SMTP transporter verified');
      }
    });
  };
  return send();
}