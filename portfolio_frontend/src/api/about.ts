import axios from "axios";
import type { About } from "../types/about";

const API_BASE = 'http://localhost:8000/api';

export const fetchAbout = async (): Promise<About> => {
    const response = await axios.get(`${API_BASE}/abouts`);
    return response.data.data as About;
};