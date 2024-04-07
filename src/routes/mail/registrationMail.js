const SendEmail = require('../../utils/SendEmail')

// send email
const registrationMail = async ({ name, email, link }) => {

  const options = {
    from: `Corporate Volleyball League <${process.env.EMAIL}>`,
    to: `${email}`,
    subject: "Verification Email",
    html: `
      <div style="font-family: sans-serif; width: 100%; background-color: #f3f9ff; padding: 5rem 0">
        <div style="max-width: 100%; background-color: white; margin: 0 auto">
          <div style="width: 100%; background-color:black; padding: 20px 0">
            <a href=${process.env.DOMAIN} >
              <img
                src="https://ik.imagekit.io/uz4hsgydu/Default/logo.png?updatedAt=1681908076921"
                style="width: 100%; height: 70px; object-fit: contain"
              />
            </a> 
            <h3 style="color: rgb(162, 162, 162); text-align: center;">Corporate Volleyball League</h3>
          </div>
          <div style="width: 100%; padding: 0px 30px; margin-top: 30px;">
            <div style="width: 100%; font-weight: 600; color: white; margin-top: auto; margin-bottom: auto; font-size: 1rem;">
              <p>Dear ${name},</p>
              <p>Thank you for registering on our Volleyball Website. We are excited to have you as a part of our community and hope that you will enjoy the resources and information we have to offer.</p>
              <p>To complete your registration and start exploring the features of our website, we need to verify your email address. This is a standard procedure that ensures the security of your account and helps us keep our website free from spammers.</p>
              <p>To verify your email address, simply click on the link provided below:</p>
              <h3> 
                <a href=${link} style="text-decoration: none;">verify email</a>
              </h3>
              <p>Once your email address has been verified, you will have access to all the features of our website.</p>
              <p>Thank you for joining our community!</p>
            </div>
          </div>
          <div style="width: 100%; gap: 10px; padding: 20px 0; display: grid">
            <div style="font-size: 0.9rem; margin: 0px 30px">
              <p style="font-weight:700; color: #ee6730" >Team CVL</b></p>
            </div>
          </div>
        </div>
      </div>
        `,
  };
  await SendEmail(options);
};
module.exports = registrationMail;
