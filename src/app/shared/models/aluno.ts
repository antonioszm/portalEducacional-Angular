import { Curso } from "./curso";

export interface Aluno {
  nomeCompleto: string;
  cpf: string;
  email: string;
  celular: string;
  senha: string;
  curso: Curso;
  id: string;
}
