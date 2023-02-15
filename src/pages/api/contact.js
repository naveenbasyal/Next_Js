import { mailOptions, transporter } from "config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: "Bad Request" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: ` Subject: ${data.subject}`,
        name: data.name,
        html: `<h2>From : ${data.name}</h1> \n <h2>Email: ${data.email}</h2>\n  <h2>Message : ${data.message}</h2> `,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  console.log(req.body);
  return res.status(400).json({ message: "Bad Request" });
};
export default handler;
