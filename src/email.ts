import * as nodemailer from 'nodemailer';
import config from './config';
import * as ejs from 'ejs';
import path from 'path';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: config.MAILER_USERNAME,
        pass: config.MAILER_PASSWORD,
    },
});

export const sendEmail = async (
    to: string, 
    subject: string, 
    fname: string, 
    lname: string,
    templateName: string
): Promise<Error | null> => {
    try {
        const templatePath = path.join(__dirname, `../views/${templateName}.ejs`);
        const html = await ejs.renderFile(templatePath, { fname, lname });

        const mailOptions = {
            from: `"Secret Santa" <${config.MAILER_USERNAME}>`,
            to,
            subject,
            html: html,
        };
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        return info.accepted.length === 0 ? new Error('Email not accepted') : null;
    } catch (err) {
        console.error('Error rendering email template:', err);
        return err;
    }
}