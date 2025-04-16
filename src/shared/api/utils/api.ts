import axios from "axios";
import {Env} from "../../../const/env.ts";
console.log(Env.VITE_API_URL)
const api = axios.create({
    baseURL: Env.VITE_API_URL,
    withCredentials: true
})

export { api }