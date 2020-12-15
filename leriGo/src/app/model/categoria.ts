import { Produto } from './produto'

export class Categoria{
    public idCategoria!: number
    public tipo!: string
    public destino!: string
    public classificacao!: string
    public produto!: Produto[]
}