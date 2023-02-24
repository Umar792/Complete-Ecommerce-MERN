const nodemailer = require("nodemailer")

const sendEmail = async (options)=>{

    const mailTransposrt = nodemailer.createTransport({
        host : process.env.SMPT_HOST,
        port:process.env.SMPT_PORT,
        service : process.env.SMPT_SERVICE,
        secure: false,
        requireTLS: true,
        auth:{
            user  : process.env.SMPT_USER_EMAIL,
            pass : process.env.SMPT_PASSWORD
        }
    })

    const mailOption = {
        from : process.env.SMPT_USER_EMAIL,
        to: options.email,
        subject : options.subject,
        text : options.message,

    }

    await mailTransposrt.sendMail(mailOption);

    
    

};

module.exports = sendEmail