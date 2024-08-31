document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const response = await fetch('/contact', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            alert('Message sent successfully!');
            form.reset();
        } else {
            alert('Failed to send message.');
        }
    });
});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // यहाँ आप डेटा को डेटाबेस में स्टोर कर सकते हैं या ईमेल के माध्यम से भेज सकते हैं
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    res.send('Form submitted successfully!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});




const nodemailer = require('nodemailer');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'info.webcreaters@gmail.com',
        pass: 'miet@6526'
    },
    debug: true,
    logger: true
});

const mailOptions = {
    from: 'info.webcreaters@gmail.com',
    to: 'recipient-email@example.com',
    subject: 'Reply Email',
    text: 'Hello, !'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});




document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Here you can send the data to your server using fetch or XMLHttpRequest
    console.log(`Name: ${name}, Email: ${email}, Date: ${date}, Time: ${time}`);

    alert('Your slot has been booked successfully!');
});const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'info.webcreaters@gmail.com',
        pass: 'miet@6526'
    }
});
exports.transporter = transporter;

