import { currentUser } from "@clerk/nextjs/server";

export default async function UserProfile() {
  const user = await currentUser();
  
  if (!user) {
    return <p>No user found</p>;
  }

  const { imageUrl, username } = user;
  const params = new URLSearchParams();

  params.set("height", "200");
  params.set("width", "200");
  params.set("quality", "100");
  params.set("fit", "crop");

  const imageSrc = `${imageUrl}?${params.toString()}`;

  return (
    <div>
      <h1>Username:</h1>
      <p>{username || 'No username found'}</p>
      
      <h2>Image:</h2>
      <img src={imageSrc} alt="User image" />
    </div>
  );
}
