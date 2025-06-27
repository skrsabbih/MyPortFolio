import axios  from "axios";
import type { Hero } from "../types/hero";

const API_BASE = 'http://localhost:8000/api';

export const fetchHero = async (): Promise<Hero> =>{
    const response = await axios.get(`${API_BASE}/heroes`);
    return response.data.data as Hero;
}