import mongoose from 'mongoose';

const OtpSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, expires: '5m', default: Date.now }
});

const Otp = mongoose.models.Otp || mongoose.model('Otp', OtpSchema);

export default Otp;
