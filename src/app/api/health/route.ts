import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'digitaltechsac',
    timestamp: new Date().toISOString(),
  });
}
