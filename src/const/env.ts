

interface EnviromentVariables {
    VITE_API_URL: string
}

export const Env: EnviromentVariables = {
    VITE_API_URL: import.meta.env.VITE_API_URL as string
}
