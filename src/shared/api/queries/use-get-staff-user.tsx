import {useQuery, UseQueryOptions} from "@tanstack/react-query";
import { api } from "../utils/api.ts";
import { API_ENDPOINTS } from "../../../const/endpoints.ts";
import {queryConfig} from "../types/queryConfig.ts";

export const getStaffUserOptions = (userId: string, options?: UseQueryOptions) => {
  return {
    queryKey: ["user_data", userId],
    queryFn: () => api.get(API_ENDPOINTS.DISCORD_STAFF_USERS(userId)),
    ...queryConfig,
    ...options
  }
}

export function useGetStaffUser(userId: string, options?: UseQueryOptions) {
  return useQuery(getStaffUserOptions(userId, options));
}
