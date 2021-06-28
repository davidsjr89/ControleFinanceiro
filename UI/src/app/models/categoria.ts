import { Tipo } from './tipo';

export interface Categoria {
    categoriaId: number;
    nome: string;
    icone: string;
    tipoId: number;
    tipo: Tipo;
}