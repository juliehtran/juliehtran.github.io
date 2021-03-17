// nodemailer allows us to send emails
const nodemailer = require('nodemailer');

const emailer = nodemailer.createTransport({
  host: `smtp.gmail.com`,
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.email,
    pass: process.env.password
  }
});

module.exports = emailer;