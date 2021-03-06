//Top level object
var emailSender = {};

/*
nodemailer
*/
var nodemailer = require('nodemailer');
var wellknown = require('nodemailer-wellknown');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ashok.babuy@gmail.com',
        pass: 'passwordhere' //give password during event
    }
});

emailSender.sendEmail = function(recipientEmail, callback)
{
    var mailOptions =
    {
        from: '"CGBot" <ashok.babuy@gmail.com>',
        to: recipientEmail,
        subject: 'Message from Mars',
        text: 'Hello from Mars Bot!' 
    }

    transporter.sendMail(mailOptions, function(err, info){
        if(!err)
        {
            console.log('Message successfully sent: ' + info.response);
            callback(null);
        }
        else
        {
            console.log(err);
            callback(err);
        }
    });
}

module.exports = emailSender;
