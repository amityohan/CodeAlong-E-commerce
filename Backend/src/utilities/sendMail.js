const nodemailer=require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: "amityohan20@gmail.com",
      pass: "ovwx zuzo wpnh bacm",
    },
  });


module.exports=transporter;