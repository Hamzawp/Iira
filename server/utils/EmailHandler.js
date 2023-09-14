const nodemailer = require("nodemailer");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
exports.sendCollegeEmail = async (user) => {

  try {
    const college = prisma.colleges.findUnique({where:{college_id: user.id}})
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: user.email,
      subject: `Welcome to ${user.college_name}`,
      html: `
        <h1>Welcome ${user.first_name},</h1>
        <p>You have been registered as a ${user.role} in our college.</p>
        <p>Here are your details:</p>
        <ul>
            <li>First Name: ${user.first_name}</li>
            <li>Last Name: ${user.last_name}</li>
            <li>Email: ${user.email}</li>
            <li>Role: ${user.role}</li>
            <li>Password: ${user.password}</li>
        </ul>
        <p> Please follow this link to complete your registration: <a href="${process.env.FRONTEND_URL}/registration/${user.user_id}">link</a></p>
        <p>Thank you for joining us.</p>

        <p>Regards,</p>
        <p>${user.college_name}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (err) {
    console.log(err);
  }
};

exports.sendUniversityEmail = async (user) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: user.email,
      subject: `Appointed as SPOC at ${user.college_name}`,
      html: `
        <h1>Welcome ${user.first_name},</h1>
        <p>You have been registered as a ${user.role} in our college.</p>
        <p>Here are your details:</p>
        <ul>
            <li>First Name: ${user.first_name}</li>
            <li>Last Name: ${user.last_name}</li>
            <li>Email: ${user.email}</li>
            <li>Role: ${user.role}</li>
            <li>Password: ${user.password}</li>
        </ul>
        <p> Please follow this link to complete your registration: <a href="${process.env.FRONTEND_URL}/registration/${user.user_id}">link</a></p>
        <p>Thank you for joining us.</p>

        <p>Regards,</p>
        <p>${user.college_name}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (err) {
    console.log(err);
  }
};
