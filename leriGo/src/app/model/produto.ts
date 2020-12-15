import { Categoria } from './categoria'

export class Produto{

    public idProduto!: number
    public nome!: string
    public tamanho!: string
    public quantidade!: number
    public preco!: number
    public foto!: string 
    public categoria!: Categoria
}