const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
  }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/send', (req, res) => {
  const { email, message } = req.body;
  
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'New Message Portfolio',
    text: message+'\n'+email
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
      res.status(500).send('Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Sent');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});