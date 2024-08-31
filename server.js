const express = require('express');
const bodyParser = require('body-parser');
const ap = express();
const port = 3000;

ap.use(bodyParser.urlencoded({ extended: true }));
ap.use(express.static('public'));

ap.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received message from ${name} (${email}): ${message}`);
    res.sendStatus(200);
});

ap.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const { transporter } = require('./script');
const app = express();

ap.use(bodyParser.urlencoded({ extended: true }));

ap.post('/submit-booking', (req, res) => {
    const { name, email, date, time } = req.body;

    const mailOptions = {
        from: 'info.webcreaters@gmail.com',
        to: email,
        subject: 'Booking Confirmation',
        text: `Hello ${name},\n\nYour booking is confirmed for ${date} at ${time}.\n\nThank you!`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error.message);
        }
        res.send('Booking confirmed! Check your email for details.');
    });
});

ap.listen(3000, () => {
    console.log('Server is running on port 3000');
});
