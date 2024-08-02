import { currentUser } from "@clerk/nextjs/server";

export default async function Username() {
  const user = await currentUser();
  if (!user) return <p>No username found</p>;

  const { username } = user;

  return (
    <div>
      <h1>Username:</h1>
      <p>{username}</p>
    </div>
  );
}
