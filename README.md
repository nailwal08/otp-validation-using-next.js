# otp-validation-using-next.js

This project demonstrates a simple OTP (One-Time Password) generator and validator using Next.js and MongoDB. The application allows users to generate an OTP which is stored in a MongoDB database, and then validate the OTP through an API. For additional features you can add nodemailer to this project and share your email and password so that user can get the OTP through mail.

## Features

- Generate a 6-digit OTP for a given email address. (length of the OTP can be modified as per requirments.)
- Store the OTP in MongoDB with an expiration time of 5 minutes.
- Validate the OTP for a given email address.

## Technologies Used

- Next.js
- MongoDB
- Mongoose
- Crypto

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB

### Installation

   ```bash
.
├── middleware
│   └── mongodb.js     # MongoDB connection setup
├── models
│   └── Otp.js         # Mongoose schema for OTP
├── pages
│   ├── api
│   │   ├── generateotp.js   # API route to generate OTP
│   │   └── validateotp.js   # API route to validate OTP
│   └── otp.js       # Frontend interface
|
├── package.json
└── README.md

 
