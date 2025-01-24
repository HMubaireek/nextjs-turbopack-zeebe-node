// app/api/hello.js (Next.js 13+)
import { NextResponse } from 'next/server';
import { ZBClient } from 'zeebe-node';

export async function GET(request) {

  let isConnected: boolean | undefined = false;

  try{
  const zeebeClient = new ZBClient('localhost:26500');
  isConnected = zeebeClient.connected;
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({ message: 'Hello, world!' + isConnected });
}
