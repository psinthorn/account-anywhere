import { NextApiRequest, NextApiResponse } from "next";


export const sendEnquiry   = async (req: NextApiRequest, res: NextApiResponse) => { 

    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: process.env.ETHEREAL_USER,
        pass: process.env.ETHEREAL_PASS,
      },
    });
  
    const { fromName, fromEmail, date, note } = req.body;
  
    const mailOptions = {
      from: fromEmail,
      to: "psinthorn@gmail.com",
      subject: "Enquiry from " + fromName,
      text: `Enquiry from ${fromName} (${fromEmail})\n\nPreferred date: ${date}\n\n${note}`,
    };
  }