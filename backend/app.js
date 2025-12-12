const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
console.log(process.env.EMAIL);
console.log(process.env.PASSWORD);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/send-email',(req,res)=>{
    const {name,email,message} = req.body;
    const transporter =nodemailer.createTransport({ 
        service :'gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    })
    const mailOptions = {
        from:email,
        to:process.env.EMAIL,
        subject:`New Message from ${name}`,
        text:message
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.status(500).send('Error sending email');
        }else{
            res.status(200).send('Email sent successfully');
        }
    })
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});