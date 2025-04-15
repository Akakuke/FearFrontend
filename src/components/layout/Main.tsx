import { twMerge } from "tailwind-merge";
import { Card, NickName, Position, Photo } from "../../shared/ui/Card";


export default function Main() {

  return (
    <header >
      <div className={twMerge("flex flex-col items-center")}>
        <h2
        className={twMerge(
          "items-center align-middle font-bold text-[24px] text-center"
        )}
      >
        Руководящий состав сервера
      </h2>
      <div className={twMerge(" flex-wrap bg-[#1f1d1d] border-[2px] border-[#201e1e] rounded-[10px] mx-[35px] mt-[20px] flex  justify-center")}>
      {data.map(() => (
            <Card key={user_data.userId}>
              <a href={`https://discord.com/users/${user_data.userId}`} target="_blank" rel="noopener noreferrer">
                <Photo src={`https://cdn.discordapp.com/avatars/${user_data.userId}/${userData.Avatar}`} />
                <NickName>{user_data.GlobalName}</NickName>
                <Position>{user_data.Position || "Developer"}</Position>
              </a>
            </Card>
          ))}
      
        </div>
      </div>
    </header>
  );
}
