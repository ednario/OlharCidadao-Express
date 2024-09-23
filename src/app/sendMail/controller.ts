import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
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

export const sendEmail = (to: string, subject: string, body: string) => {
  const transporter = nodemailer.createTransport(smtpConfig);


  const send = () => {
    transporter.sendMail({
      from: process.env.MAIL_USER,
      to,
      subject,
      text: body,
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