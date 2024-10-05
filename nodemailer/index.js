import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
const app = express();
const port=8000

app.set("view engine", "ejs");

dotenv.config();
console.log(process.env.EMAIL,process.env.PASSWORD)
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("css"));

app.get("/", (req, res) => {
  res.render("mail");
});

app.post("/email-sent", async (req, res) => {
  const { name, email, message } = req.body;

  let config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let mailoption = {
    from: process.env.EMAIL,
    to: `${email}`,
    subject: `${name}`,
    text: `my name is ${name} and mine nodemailer is ${message}`,
    html: `my name is ${name} and mine nodemailer is ${message}`,
  };

  try {
    await transporter.sendMail(mailoption);
  return res.status(200).json({message:"Email sent successfully"})
  } catch (error) {
    return res.status(400).json({message:"Error",error})
  }
})

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});