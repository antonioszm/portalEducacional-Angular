import { Semestre } from "./semestre";

export interface Curso {
  id: string;
  nome: string;
  semestres: Semestre[];
}
