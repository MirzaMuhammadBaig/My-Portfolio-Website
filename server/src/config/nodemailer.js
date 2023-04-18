import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'philippealain426@gmail.com',
    pass: '@Philippealain426'
  }
});

export function sendVerificationEmail(email, verificationCode) {
  const mailOptions = {
    from: 'your_email@example.com',
    to: email,
    subject: 'Verify your email',
    text: `Please click the following link to verify your email: http://localhost:3000/verify-email?code=${verificationCode}`
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
