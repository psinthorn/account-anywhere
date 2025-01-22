import { MailtrapClient } from 'mailtrap';

export const mailClient = new MailtrapClient({token: process.env.MAILTRAP_TOKEN!});