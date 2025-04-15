import { useGetStaffUsers } from '../../shared/api/queries/use-get-staff-users'; // Убедитесь, что путь правильный
import { twMerge } from "tailwind-merge";
import { Card, NickName, Position, Photo } from "../../shared/ui/Card";

export default function Main({}) {
  const { data: user_data } = useGetStaffUsers(userId);

  
  return (
    <header>
      <div className={twMerge("flex flex-col items-center")}>
        <h2
          className={twMerge(
            "items-center align-middle font-bold text-[24px] text-center"
          )}
        >
          Руководящий состав сервера
        </h2>
        <div
          className={twMerge(
            "flex-wrap bg-[#1f1d1d] border-[2px] border-[#201e1e] rounded-[10px] mx-[35px] mt-[20px] flex justify-center"
          )}
        >
          {user_data.map(user => (
            <Card key={user.userId}>
              <a
                href={`https://discord.com/users/${user.userId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Photo
                  src={`https://cdn.discordapp.com/avatars/${user.userId}/${user.avatar}`}
                />
                <NickName>{user.globalName}</NickName>
                <Position>{user.position || "Developer"}</Position>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </header>
  );
}
