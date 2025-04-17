import { Button } from "../../shared/ui/Button";
import { Avatar } from "../../shared/ui/Avatar";
import { Badge } from "../../shared/ui/Badge";
import { twMerge } from "tailwind-merge";
import { useGetGuild } from "../../shared/api/queries/use-get-guild";

export default function Header() {
  const { data, isLoading } = useGetGuild(); // Вызов функции

  if (isLoading) {
    return <div>Загрузка...</div>; // Показать индикатор загрузки
  }
  if (!data) {
    return <div>Нет данных для отображения.</div>; // Показать сообщение, если данных нет
  }
  return (
    <header className="bg-[#242424]">
      <div className={twMerge("flex justify-between items-center p-2")}>
      <div className={twMerge(" flex gap-2 items-center")}>
        <Avatar src={data.iconURL} />
        <h1
          className={twMerge(" text-1 text-white font-bold text-[28px] py-2")}
        >
          FEAR
        </h1>
        <div className="flex">
          <h1 className={twMerge(" text-1 text-white text-[14px] pl-10 mt-1")}>
            
            <a href="/">Главная</a>
          </h1>
          <h1 className={twMerge(" text-1 text-white text-[14px] pl-5 mt-1")}>
            <a href="/team">Руководящий состав</a>
          </h1>
          <h1 className={twMerge(" text-1 text-white text-[14px] pl-5 mt-1")}>
           <a href="/404">Что то еще</a>
          </h1>
        </div>
      </div>
      <div className={twMerge(" flex items-center gap-2")}>
        <Badge>
          <p className={twMerge("text-[#818189] ml-2 mr-2")}>
            ● {data.membercount}
          </p>
          <p className={twMerge("text-[#43a25a]  mr-2 ml-2")}>
            ● {data.uservoice}
          </p>
        </Badge>
        <Button>
          <a href="https://discord.gg/feargames" target="_blank">
            Присоединиться к серверу
          </a>
        </Button>
      </div>
      </div>
    </header>
    
  );
}
