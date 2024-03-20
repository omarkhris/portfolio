const AWS = require('aws-sdk');

const ses = new AWS.SES();

exports.handler = async (event, context) => {
    const { name, email, subject,phoneNumber,message ,recipientEmail} = JSON.parse(event.body);

    const params = {
        Destination: {
            ToAddresses: [recipientEmail] // Recipient email address
        },
        Message: {
            Body: {
                Text: {
                    name:name,
                    phoneNumber:phoneNumber,
                    Data: message // Message body
                }
            },
            Subject: {
                Data: subject // Email subject
            }
        },
        Source: email // Sender email address
    };

    try {
        const data = await ses.sendEmail(params).promise();
        console.log('Email sent:', data.MessageId);
        return {
            statusCode: 200,
            body: JSON.stringify('Email sent successfully!')
        };
    } catch (err) {
        console.error('Error sending email:', err);
        return {
            statusCode: 500,
            body: JSON.stringify('Error sending email')
        };
    }
};
