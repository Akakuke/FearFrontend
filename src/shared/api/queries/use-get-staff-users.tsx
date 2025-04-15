import { useQuery } from "@tanstack/react-query";
import { user } from "../../../api";

export default function UseGetStaffUsers() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["user_data", user], // Уникальный ключ для кэширования
    queryFn: user,
    refetchInterval: 5000,
    // Функция для получения данных
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка при получении данных: {error.message}</div>;
  }

  if (!data) {
    return <div>Нет данных для отображения.</div>;
  }
}
