export const API_ENDPOINTS = {
    DISCORD_STAFF_USERS: (userId: string) => `/discord/${userId}`,
    DISCORD_SERVER_DATA: (guildId: string) => `/discord/${guildId}`
}