type NavItem = {
    name: string,
    path: string
}

type NewsArticle = {
    id: string,
    image: string,
    alt: string,
    title: string,
    description: string,
    author: string,
    date: string
    tags: string[]
}

type Product = {
    id: string,
    name: string,
    model: string,
    description: string,
    features: string[],
    specifications: string[],
    videoURL: string,
    images: ProductImage[],
    table: any

}

type ProductImage = {
    path: string,
    src: string
}