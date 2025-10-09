import nodemailer from "nodemailer";
import getHtml from "../template/reg";
const cb = (err, info) => {
  // if (err) {
  //   console.log("##ERR");
  //   console.log(err);
  // } else {
  //   console.log("##SUP?");
  //   console.log(info);
  // }
};

export default async function sendEmail(email, name, waLink, eventName) {
  console.log("MAILER: ");
  console.log(process.env.NODEMAILER_USERNAME, process.env.NODEMAILER_PASSWORD);
  console.log(email, name, waLink, eventName)

  const transporterOptions = {
    service: "Gmail",
    auth: {
      user: process.env.NODEMAILER_USERNAME,
      pass: process.env.NODEMAILER_PASSWORD,
    },
    from: process.env.NODEMAILER_USERNAME+"",
  };
  let transporter = nodemailer.createTransport(transporterOptions);

  // await transporter.sendMail(mail, cb);
  (async () => {
    const info = await transporter.sendMail({
      from: process.env.NODEMAILER_USERNAME+"",
      to: email,
      subject: "Momentum 2025 Registration Successfull!",
      html: getHtml(name, waLink, eventName), // HTML body
    });

    console.log("Message sent:", info.messageId);
  })();
}
