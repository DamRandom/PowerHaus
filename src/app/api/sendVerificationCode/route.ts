import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface VerificationCodeData {
  code: number;
  timestamp: number;
}

const verificationCodes: Record<string, VerificationCodeData> = {}; // In-memory storage for verification codes

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
    const verificationCode = Math.floor(100000 + Math.random() * 900000);

    // Store code
    verificationCodes[email] = { code: verificationCode, timestamp: Date.now() };

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASSWORD },
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
