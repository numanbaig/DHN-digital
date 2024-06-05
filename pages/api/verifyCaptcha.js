import axios from "axios"


// const SITE_SECRET = process.env.SITE_SECRET
const   SITE_SECRET =  "6Lfrb_EpAAAAAJA4v1VOyvbudGAoxcmirzrqLrwW"

export default async function handler(
    request,
    res
  ) {
    if (request.method === 'POST') {
      try {
        // console.log(request.body, 'bodyyy')
        const { captchaValue } = request.body
        const { data } = await axios.post(
          `https://www.google.com/recaptcha/api/siteverify?secret=${SITE_SECRET}&response=${captchaValue}`)
        console.log(data, '<<<<<<<')
        if (data) {
            // return res.status(200).json({ success: true, error: 'Verifyed' })
            return res.send(data)

        } else {
            return res.status(304).json({ success: false, error: 'Verify failed' })
        }
      } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, error: 'Internal Server Error' })
      }
    } else {
      res.status(405).json({ success: false, error: 'Method Not Allowed' })
    }
    return res
  }