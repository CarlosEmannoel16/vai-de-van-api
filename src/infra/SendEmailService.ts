import { ISendEmail, SendEmail } from './protocols/email/SendEmail';
import { Nodemailer } from '@/loader/InitializeEmail';

export class EmailService implements ISendEmail {
  async send(data: SendEmail.Params): Promise<void> {
    const emailService = Nodemailer.getInstance;
    await emailService.transporter.sendMail({
      text: data.message,
      subject: data.subject,
      to: data.to,
      from: emailService.getEmail(),
    });
  }
}
