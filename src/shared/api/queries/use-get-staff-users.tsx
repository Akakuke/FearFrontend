import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api.ts";
import { API_ENDPOINTS } from "../../../const/endpoints.ts";

export function useGetStaffUsers(userId: string) {
  return useQuery({
    queryKey: ["user_data"],
    queryFn: () => api.get(API_ENDPOINTS.DISCORD_STAFF_USERS(userId)),
    refetchInterval: 5000,
  });
}
