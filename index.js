const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express will serve up production assets
app.use(express.static(path.resolve(__dirname, "client", "build")));
app.use(express.static(path.resolve(__dirname, "public")));

// Express serve up index.html file if it doesn't recognize route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.post("/api/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
    <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:50% !important; width:50%; height:auto !important;" src="http://cdn.mcauto-images-production.sendgrid.net/739d627c883976c8/f6b348ff-fbad-412d-931c-efa64fb750aa/478x523.png" alt="" width="300" data-responsive="true" data-proportionally-constrained="false">
    </td>
    <div style="font-family: inherit; text-align: left"><strong>Hello ${req.body.name}! Thanks for reaching out!!</strong></div>
    <div style="font-family: inherit; text-align: left"><br></div>
    <div style="font-family: inherit; text-align: left"><span style="font-family: verdana, geneva, sans-serif">I will get back to you within 1-2 business days. For urgent inquires, please call me.&nbsp;</span></div>
    <div style="font-family: inherit; text-align: center"><br></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-family: verdana, geneva, sans-serif">Cheers,&nbsp;</span></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-family: verdana, geneva, sans-serif">Parth Desai</span></div>
    `;

    const adminEmail = `
    <div style="font-family: inherit"><span style="color: #efeaea; font-size: 15px">Hello,</span></div>
    <div style="font-family: inherit"><br></div>
    <div style="font-family: inherit"><span style="color: #efeaea; font-size: 15px">Client Name: ${req.body.name}</span></div>
    <div style="font-family: inherit"><span style="color: #efeaea; font-size: 15px">Client Email: ${req.body.email}</span></div>
    <div style="font-family: inherit"><br></div> 
    <div style="font-family: inherit"><span style="font-family: lucida sans unicode,lucida grande,sans-serif; font-size: 16px">Client Message: ${req.body.message}</span></div>
    `;

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL, // sender address
      to: `${req.body.email}`, // list of receivers
      subject: `Thank you ${req.body.name}! - Parth Desai`, // Subject line
      text: req.body.message, // plain text body
      html: htmlEmail, // html body
    };

    let mailOption = {
      from: `${req.body.email}`, // sender address
      to: process.env.EMAIL, // list of receivers
      subject: `Message from ${req.body.name}`, // Subject line
      text: req.body.message, // plain text body
      html: adminEmail,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Message sent: %s", info.messageId);
    });

    transporter.sendMail(mailOption, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Message sent: %s", info.messageId);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
