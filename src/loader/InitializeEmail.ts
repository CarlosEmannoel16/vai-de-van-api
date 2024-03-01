import { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { config } from 'dotenv';
import nodemailer from 'nodemailer';

config();

export class Nodemailer {
  public transporter: Transporter<SMTPTransport.SentMessageInfo>;
  private static instance: Nodemailer;

  static get getInstance() {
    if (!Nodemailer.instance) Nodemailer.instance = new Nodemailer();
    return Nodemailer.instance;
  }

  init() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: { rejectUnauthorized: false },
    });
    console.log('Serviço de Email Inicializado ✅📧 para ' + process.env.EMAIL);
  }

  getEmail = () => {
    return process.env.EMAIL;
  };
}
