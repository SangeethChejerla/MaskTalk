import { NextResponse } from 'next/server';
import { addMessage, getMessages } from '../../../db/queries';

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { username, content }: { username: string; content: string } = await request.json();
    await addMessage(username, content);
    return NextResponse.json({ message: 'Message added successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    const messages: any[] = await getMessages();
    return NextResponse.json(messages);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
