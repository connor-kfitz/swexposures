type NavItem = {
    name: string,
    path: string
}

type NewsArticle = {
    id: string,
    title: string,
    author: string,
    body: string,
    createdAt: string,
    datePublished: string,
    tags: string[],
    image: ProductImage
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

type FirestoreTimestamp = {
    seconds: number,
    nanoseconds: number
}