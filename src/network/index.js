import axios from "axios";
export const axiosInstance = axios.create({
	baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=a00ba3219f26860b2e210388c45e126a"
})