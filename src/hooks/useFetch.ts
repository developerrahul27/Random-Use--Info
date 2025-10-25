import axios from "axios";
import type { ApiResponse } from "../types";

const BASE_URL = import.meta.env.VITE_RANDOM_USER_API;

export const fetchUserApi = async (): Promise<ApiResponse> => {
  const { data } = await axios.get<ApiResponse>(BASE_URL);
  return data;
};
