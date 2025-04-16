import { useQuery,  } from "@tanstack/react-query";
import { api } from "../utils/api.ts";
import { API_ENDPOINTS } from "../../../const/endpoints.ts";
import { GuildResponse } from "../types/guildResponse.ts";

export function useGetGuild() {
  return useQuery<GuildResponse, Error>({
    queryKey: ["guild_data"],
    queryFn: async () => {
      const response = await api.get(API_ENDPOINTS.DISCORD_SERVER_DATA());
      return response.data;
    },
  });
}
