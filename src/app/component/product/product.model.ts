export interface Product{
    id?:number
    nome: string
    descricao:string
    preco: number
    preco_custo: number|null
    preco_venda:number|null
    estoque:number
}