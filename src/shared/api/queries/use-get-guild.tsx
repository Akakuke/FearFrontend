import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { api } from "../utils/api.ts";
import { API_ENDPOINTS } from "../../../const/endpoints.ts";
import { queryConfig } from "../types/queryConfig.ts";

export function getGuildOptions(guildId: string, options?: UseQueryOptions) {
  return ({
    queryKey: ["guild", guildId],
    queryFn: () => api.get(API_ENDPOINTS.DISCORD_STAFF_USERS(guildId)),
    ...queryConfig,
    ...options,
  });
}

export function useGetGuild(guildId: string, options?: UseQueryOptions) {
  return useQuery(getGuildOptions(guildId, options));
}
