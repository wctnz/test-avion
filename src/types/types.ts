export interface IProduct {
    id: number
    category: string
    title: string
    image: string
    price: number
    popular?: boolean
    desc: string
    count: number
}