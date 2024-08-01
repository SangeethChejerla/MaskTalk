import { db, messages, users } from './schema';
import { eq, desc, sql, count } from 'drizzle-orm';

export const addMessage = async (username: string, content: string) => {
  if (content.length > 100) {
    throw new Error('Message too long. Maximum 100 characters allowed.');
  }

  const user = await db.select().from(users).where(eq(users.username, username)).execute();
  let userId = user[0]?.id;

  if (!userId) {
    const newUser = await db.insert(users).values({ username }).returning({ id: users.id }).execute();
    userId = newUser[0].id;
  }

  if (!userId) {
    throw new Error('Failed to get or create user');
  }

  await db.insert(messages).values({
    userId,
    content,
  }).execute();

  const totalMessages = await db.select({ 
    count: count()
  }).from(messages).execute();
  
  if (totalMessages[0] && totalMessages[0].count > 20) {
    const messagesToDelete = db.select({ id: messages.id })
      .from(messages)
      .orderBy(messages.createdAt)
      .limit(Number(totalMessages[0].count) - 20);
  
    await db.delete(messages)
      .where(sql`${messages.id} IN ${messagesToDelete}`)
      .execute();
  }
};

export const getMessages = async () => {
  return db.select({
    id: messages.id,
    content: messages.content,
    createdAt: messages.createdAt,
    username: users.username,
  })
    .from(messages)
    .innerJoin(users, eq(messages.userId, users.id))
    .orderBy(desc(messages.createdAt))
    .limit(20)
    .execute();
};
