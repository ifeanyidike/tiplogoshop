import nodemailer from "nodemailer"
import smtpTransport from "nodemailer-smtp-transport"
import mailgun from "mailgun-js"
import dotenv from "dotenv"


dotenv.config()
const DOMAIN = 'sandbox6965d253ce194d04aa8864f392e39aae.mailgun.org';
const apiKey = '0af903043e61722985d8673303558328-b6190e87-c2ebe134'
const mg = mailgun({apiKey: apiKey, domain: DOMAIN});

const mgOptions = (from, to, subject, message) => ({
	from: from,
	to: to,
	subject: subject,
	html: message
});

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,    
//     auth:{
//         type: 'OAUTH2',
//         user: process.env.ADMIN_EMAIL,
//         pass: process.env.ADMIN_PASSWORD,
//         clientId: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
//         expires: 3599
//     }
// })


const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false,
    port: 25,    
    auth:{
        user: 'ifeanyidike87@gmail.com',
        pass: 'dike.ifeanyi1'
    },
    tls:{
        rejectUnauthorized: false
    }
}))

const mailOptions = (to, subject, message) =>{
    return {
        from: 'ifeanyidike87@gmail.com',
        to: to,
        subject: subject,
        html: message
    }
}

export {mg, mgOptions}