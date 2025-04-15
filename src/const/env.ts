interface EnviromentVariables {
    VITE_API_URL: string
}

export const Env: EnviromentVariables = {
    VITE_API_URL: process.env.VITE_API_URL as string
}
