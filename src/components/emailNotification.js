const form = document.querySelector("form");

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.elasticemail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "omar2009kh@gmail.com",
        pass: "E07906639DAF35B51F4AF35614175EA1195E",
    },
});

function sendEmail() {
    const messageBody = `Sender-Name: ${fullName.value} <br> Email: ${email.value} <br> Contact-Phone: ${phone.value} <br> message-context: ${message.value} <br>`;
    
    const mailOptions = {
        from: "omar.alkhrissat@gmail.com",
        to: 'omar.alkhrissat@gmail.com',
        subject: "Your Subject Here",
        html: messageBody,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

// Assuming you have these variables defined somewhere
const fullName = { value: "John Doe" };
const email = { value: "john.doe@example.com" };
const phone = { value: "1234567890" };
const message = { value: "This is a test message" };

// Call sendEmail when the form is submitted
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    sendEmail();
});




