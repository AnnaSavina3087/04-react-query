import axios from "axios";
import type { Movie } from "../types/movie";

export interface MoviesResponse {
  page: number;
  total_pages: number;
  results: Movie[];
}

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE = "https://api.themoviedb.org/3";

const axiosInstance = axios.create({
  baseURL: BASE,
});

export const searchMovies = async (
  query: string,
  page = 1,
): Promise<MoviesResponse> => {
  if (!query.trim()) {
    throw new Error("Query is empty");
  }

  const res = await axiosInstance.get<MoviesResponse>("/search/movie", {
    params: {
      api_key: API_KEY,
      query,
      page,
      language: "en-US",
    },
  });

  return res.data;
};
