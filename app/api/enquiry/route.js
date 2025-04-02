import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { requestNumber, firstName, lastName, email, mobile, flightNo, date, carType, carModel, rate, pickupPoint, dropoffPoint, cardNumber, expiryDate, cvv, recaptchaToken } = req.body;

    // Create a transporter object using Mailtrap
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SSL_HOST,
      port: process.env.SMTP_PORT,
      // secure: false, // true for 465, false for other ports
      // port: parseInt(process.env.MAILTRAP_PORT, 10),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content to be sent to the administrator
    const adminMailOptions = {
      from: '"New Enquiry" <info@f2.co.th>',
      to: "<info@f2.co.th>", // Administrator email
      subject: 'New Enquiry',
      html: `
        <h1>New Enquiry</h1>
        <h3>Enquiry Details:</h3>
        <hr/>
        <p><strong>Booking ID:</strong> ${requestNumber}</p>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Flight No:</strong> ${flightNo}</p>
        <p><strong>Pickup Date/Time:</strong> ${date}</p>
        <p><strong>Car Type:</strong> ${carType}</p>
        <p><strong>Car Type:</strong> ${carModel}</p>
        <p><strong>Rate:</strong> ${rate}</p>
        <p><strong>Pickup Point:</strong> ${pickupPoint}</p>
        <p><strong>Dropoff Point:</strong> ${dropoffPoint}</p>
        <hr/>
      `,
    };

    // Email content to be sent to the customer for acknowledgment
    const customerMailOptions = {
      from: '"Your Enquiry with F2" <info@f2.co.th>',
      to: email, // Customer email
      subject: 'Thank you inquiring with us',
      html: `
        <br/>
       
        <p>Dear ${firstName} ${lastName},</p>
        <p>Thank you for your interresting on our products and services</p>
        <p>We will to to your enquiry and contact your back soon.</p>
        <br/>
        <h3>Details</h3>
        <hr/>
        <p><strong>Booking ID:</strong> ${requestNumber}</p>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Flight No:</strong> ${flightNo}</p>
        <p><strong>Pickup Date/Time:</strong> ${date}</p>
        <p><strong>Car Type:</strong> ${carType}</p>
         <p><strong>Car Type:</strong> ${carModel}</p>
        <p><strong>Rate:</strong> ${rate}</p>
        <p><strong>Pickup Point:</strong> ${pickupPoint}</p>
        <p><strong>Dropoff Point:</strong> ${dropoffPoint}</p>
        <br/>
        <hr/>
        <h3>Terms and Conditions</h3>
        
      
        <br/>
        <p>Best regards,</p>
        <p>F2 Co.,Ltd.</p>
      `,
    };

    // // Generate PDF voucher
    // const voucherHtml = `
    //   <h1>Booking Voucher</h1>
    //   <p><strong>First Name:</strong> ${firstName}</p>
    //   <p><strong>Last Name:</strong> ${lastName}</p>
    //   <p><strong>Email:</strong> ${email}</p>
    //   <p><strong>Mobile:</strong> ${mobile}</p>
    //   <p><strong>Flight No:</strong> ${flightNo}</p>
    //   <p><strong>Arrival Time:</strong> ${arrivalTime}</p>
    //   <p><strong>Car Type:</strong> ${carType}</p>
    //   <p><strong>Rate:</strong> ${rate}</p>
    //   <p><strong>Pickup Point:</strong> ${pickupPoint}</p>
    //   <p><strong>Dropoff Point:</strong> ${dropoffPoint}</p>
    // `;

    // htmlPdf.create(voucherHtml).toBuffer(async (err, buffer) => {
    //   if (err) {
    //     console.error('Error generating PDF:', err);
    //     res.status(500).json({ message: 'Failed to generate PDF.' });
    //     return;
    //   }

    //   // Attach PDF voucher to customer email
    //   customerMailOptions.attachments = [
    //     {
    //       filename: 'voucher.pdf',
    //       content: buffer,
    //     },
    //   ];

      try {
        // Send email to the administrator
        await transporter.sendMail(adminMailOptions);
        // Send acknowledgment email to the customer with PDF voucher
        await transporter.sendMail(customerMailOptions);
        // Success message
        res.status(200).json({ message: 'Messages sent successfully!' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send messages.' });
      }
    // });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};