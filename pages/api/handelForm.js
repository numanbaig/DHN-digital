// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export default async function handler(
  request,
  res
) {
  if (request.method === 'POST') {
    try {
      console.log(request.body, 'bodyyy')
      const { firstName, lastName, email, phoneNumber, message } = request.body;
      const transporter = nodemailer.createTransport({
        // Set your email service credentials
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

        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
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