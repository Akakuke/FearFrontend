import { twMerge } from "tailwind-merge";
import { Card, CardNickName, CardPosition } from "../../shared/ui/Card";
import { useGetStaffUsers } from "../../shared/api/queries/use-get-staff-users";
import { Avatar } from "../../shared/ui/Avatar";

export default function TeamPage({}) {
  const { data, isLoading, isError } = useGetStaffUsers(); // Вызов функции

  if (isError) {
    return <div>Ошибка загрузки данных.</div>; // Показать сообщение об ошибке
  }
  if (isLoading) {
    return <div>Загрузка...</div>; // Показать индикатор загрузки
  }
  if (!data) {
    return <div>Нет данных для отображения.</div>; // Показать сообщение, если данных нет
  }
  return (
    <main>
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
          {[
            ...data.owner,
            ...data.tech_admin,
            ...data.staff_admin,
            ...data.admin_moderator,
            ...data.admin_control,
            ...data.admin_support,
            ...data.admin_eventsmod,
            ...data.admin_closemod,
            ...data.admin_broadcaster,
            ...data.admin_creative,
            ...data.admin_contentmaker,
            ...data.admin_clanmod,
            ...data.admin_helper,
            ...data.developer,

          ].map((user) => (
            <a
              key={user.id}
              href={`https://discord.com/users/${user.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card>
                <Avatar className="size-20 mb-[10px]" src={user.avatarURL} />
                <CardNickName>{user.username}</CardNickName>
                <CardPosition>{user.position}</CardPosition>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
