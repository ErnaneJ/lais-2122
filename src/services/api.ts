import { Curso } from "../types/curso";
import { Parceiro } from "../types/parceiro";

const endpoint  = "http://localhost:3004";

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
