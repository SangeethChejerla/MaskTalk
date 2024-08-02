import { NextResponse } from 'next/server';
import { addMessage, getMessages } from '../../../db/queries';
import { currentUser } from '@clerk/nextjs/server';

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { content }: { content: string } = await request.json();
    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
    }

    const username = user.username;

    if (!username) {
      return NextResponse.json({ error: 'Username is required' }, { status: 400 });
    }

    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    // Add the message to the database with the authenticated username
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


