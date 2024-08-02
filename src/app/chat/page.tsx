import ProfileImage from "@/components/profileImage";
import Username from "@/components/Username";
import { currentUser } from "@clerk/nextjs/server"

export default async function Chat(){

    const user = await currentUser();
    const username = user?.username
    const welcomeSuffix = username ? `, ${username}` : '';
    return(
        <div>
            <h1 className="text-4xl">{welcomeSuffix}</h1>
            <div className="flex justify-center flex-col">
                <h2 className="text-2xl">Welcome to the chat!</h2>
                <ProfileImage />
                <Username/>
                </div>
        </div>
    )
}
