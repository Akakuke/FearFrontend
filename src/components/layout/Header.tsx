import { Button } from "../../shared/ui/Button";
import { Avatar } from "../../shared/ui/Avatar";
import { Badge } from "../../shared/ui/Badge";
import { twMerge } from "tailwind-merge";
import { useQuery } from "@tanstack/react-query";
import { guild } from "../../api";

export default function Header() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["guildData", "532331179760812033"], // Уникальный ключ для кэширования
    queryFn: guild,
    refetchInterval: 5000,
    // Функция для получения данных
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка при получении данных: {error.message}</div>;
  }
  return (
    <header className={twMerge("flex justify-between items-center p-2")}>
      <div className={twMerge(" flex gap-2 items-center")}>
        <Avatar src={`https://cdn.discordapp.com/icons/${data.guildId}/${data.Avatar}`} />
        <h1
          className={twMerge(" text-1 text-white font-bold text-[28px] py-2")}
        >
          FEAR
        </h1>
      </div>

      <div className={twMerge(" flex items-center gap-2")}>
        <Badge>
          <p className={twMerge("text-[#818189] ml-2 mr-2")}>
            ● {data.memberCount}
          </p>
          <p className={twMerge("text-[#43a25a]  mr-2 ml-2")}>
            ● {data.voiceusers}
          </p>
        </Badge>
        <Button>
          <a href="https://discord.gg/feargames" target="_blank">
            Присоединиться к серверу
          </a>
        </Button>
      </div>
    </header>
  );
}
