import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api.ts";
import { API_ENDPOINTS } from "../../../const/endpoints.ts";
import { StaffResponse } from "../types/staffResponse.ts";

export function useGetStaffUsers() {
  return useQuery<StaffResponse, Error>({
    queryKey: ["user_data"],
    queryFn: async () => {
      const response = await api.get(API_ENDPOINTS.DISCORD_STAFF_USERS());
      return response.data;
    },
  });
}
