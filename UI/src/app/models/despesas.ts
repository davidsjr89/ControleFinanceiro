import { Mes } from './mes';
import { Cartao } from './cartao';
export class Despesa{
    despesaId!: number;
    cartaoId!: number;
    cartao!: Cartao;
    descricao!: string;
    categoriaId!: number;
    valor!: number;
    dia!: number;
    mesId!: number;
    mes!: Mes;
    ano!: number;
    usuarioId!: number;
}