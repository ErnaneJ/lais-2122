import { Curso } from "../types/curso";
import { Parceiro } from "../types/parceiro";
import { Transparencia } from "../types/transparencia";

// const endpoint  = "http://localhost:3004";
const endpoint  = "https://lais-api.herokuapp.com";

export const getCurses = async (path: string):Promise<Curso[]> => {
  const response = await fetch(`${endpoint}${path}`);
  const data = await response.json();

  return data as Curso[];
}

export const getPartners = async (path: string):Promise<Parceiro[]> => {
  const response = await fetch(`${endpoint}${path}`);
  const data = await response.json();

  return data as Parceiro[];
}

export const getTransparency = async (path: string):Promise<Transparencia> => {
  const response = await fetch(`${endpoint}${path}`);
  const data = await response.json();
  
  return data as Transparencia;
}

