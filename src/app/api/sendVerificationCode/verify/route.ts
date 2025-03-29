import { NextResponse } from 'next/server';

interface VerificationCodeData {
  code: number;
  timestamp: number;
}

const verificationCodes: Record<string, VerificationCodeData> = {}; // Debes usar almacenamiento persistente en producción
const CODE_EXPIRATION_TIME = 10 * 60 * 1000; // 10 minutes

export async function POST(request: Request) {
  const body = await request.json();
  const { email, code } = body;

  if (!email || !code) {
    return new NextResponse(
      JSON.stringify({ error: 'Email and code are required' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Check if code exists
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

  // Compare codes
  if (storedCodeData.code === parseInt(code)) {
    delete verificationCodes[email]; // Remove code after verification
    return new NextResponse(
      JSON.stringify({ message: 'Verification successful' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } else {
    return new NextResponse(
      JSON.stringify({ error: 'Invalid verification code' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
