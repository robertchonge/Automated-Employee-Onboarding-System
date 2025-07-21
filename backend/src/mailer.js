const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

async function sendWelcomeEmail(email, name) {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: 'Welcome to the Company!',
    text: `Hello ${name}, welcome to the company! Please check your onboarding tasks.`
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { sendWelcomeEmail };
