import { useState } from 'react';
export default function Home() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const handleGenerateOtp = async () => {
    setMessage('');
    const response = await fetch('/api/generateotp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    setMessage(data.message || data.error);
  };
  const handleValidateOtp = async () => {
    setMessage('');
    const response = await fetch('/api/validateotp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });
    const data = await response.json();
    setMessage(data.message || data.error);
  };
  return (
    <div>
      <h1>OTP Generator and Validator</h1>
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleGenerateOtp}>Generate OTP</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button onClick={handleValidateOtp}>Validate OTP</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}
