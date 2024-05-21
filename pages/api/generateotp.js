import dbConnect from '../../middleware/mongodb';
import Otp from '../../models/Otp';
import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Please enter Email.' });
    }
    const otp = crypto.randomInt(100000, 999999).toString();
    try {
      await dbConnect();
      await Otp.create({ email, otp });
      res.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
