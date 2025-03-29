import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface VerificationCodeData {
  code: number;
  timestamp: number;
}

const verificationCodes: Record<string, VerificationCodeData> = {}; // In-memory storage for verification codes

const CODE_EXPIRATION_TIME = 10 * 60 * 1000; // 10 minutes in milliseconds

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return new NextResponse(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Generate verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000); // 6-digit code

    // Store code with timestamp
    verificationCodes[email] = {
      code: verificationCode,
      timestamp: Date.now(),
    };

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Verification Code',
      text: `Your verification code is: ${verificationCode}`,
    };

    // Send verification email
    await transporter.sendMail(mailOptions);

    return new NextResponse(
      JSON.stringify({ message: 'Verification code sent' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending verification code:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Error sending verification code' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Route to verify the verification code
export async function verifyCode(request: Request) {
  const body = await request.json();
  const { email, code } = body;

  if (!email || !code) {
    return new NextResponse(
      JSON.stringify({ error: 'Email and code are required' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Check if code exists in storage
  const storedCodeData = verificationCodes[email];

  if (!storedCodeData) {
    return new NextResponse(
      JSON.stringify({ error: 'No verification code found for this email' }),
      { status: 404, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Check if code is expired
  const isExpired = Date.now() - storedCodeData.timestamp > CODE_EXPIRATION_TIME;

  if (isExpired) {
    delete verificationCodes[email]; // Remove expired code
    return new NextResponse(
      JSON.stringify({ error: 'Verification code has expired' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Compare the entered code with the stored code
  if (storedCodeData.code === parseInt(code)) {
    // Code is correct
    delete verificationCodes[email]; // Remove code after verification
    return new NextResponse(
      JSON.stringify({ message: 'Verification successful' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } else {
    // Code is incorrect
    return new NextResponse(
      JSON.stringify({ error: 'Invalid verification code' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
