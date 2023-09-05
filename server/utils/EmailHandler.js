const nodemailer = require("nodemailer");

exports.sendCollegeEmail = async (user) => {
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
      subject: "Welcome to the College",
      html: `
        <h1>Welcome ${user.first_name}</h1>
        <p>You have been registered as a ${user.role} in our college.</p>
        <p>Here are your details:</p>
        <ul>
            <li>First Name: ${user.first_name}</li>
            <li>Last Name: ${user.last_name}</li>
            <li>Email: ${user.email}</li>
            <li>DOB: ${user.dob}</li>
            <li>Role: ${user.role}</li>
            <li>Password: ${user.password}</li>
        </ul>
        <p> Please follow this link to complete your registration: <a href="${process.env.FRONTEND_URL}/${user.role}/registration/${user._id}">link</a></p>
        <p>Thank you for joining us.</p>

        <p>Regards,</p>
        <p>College</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (err) {
    console.log(err);
  }
};
