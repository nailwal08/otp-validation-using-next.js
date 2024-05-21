import dbConnect from '../../middleware/mongodb';
import Otp from '../../models/Otp';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ error: 'Email and OTP are required' });
    }
    try {
      await dbConnect();
      const record = await Otp.findOne({ email, otp });
      if (!record) {
        return res.status(400).json({ error: 'Invalid OTP' });
      }

      res.status(200).json({ message: 'OTP validated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
