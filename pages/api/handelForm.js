
import nodemailer from 'nodemailer'
export default async function handler(
  request,
  res
) {
  if (request.method === 'POST') {
    try {
      console.log(request.body, 'bodyyy')
      const { firstName, lastName, email, phoneNumber, message } = request.body;
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_PW
        }
      })
      // Create email message
      const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: 'numansafi97@gmail.com',
        subject: 'User Contact Data',

        text: `First name: ${firstName}\nLastName:${lastName}\nTelphone: ${phoneNumber}\nEmail: ${email}\nMessage: ${message}`
      }
      await transporter.sendMail(mailOptions)
      res.status(200).json({ success: true })
    } catch (error) {
      console.error(error)
      res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' })
  }
  return res
}