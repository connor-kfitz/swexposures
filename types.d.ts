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

type ProductCategory = {
    name: string,
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
    category: string,
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

interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
    allow?: string;
    allowFullScreen?: boolean;
    allowTransparency?: boolean;
    frameBorder?: number | string;
    height?: number | string;
    marginHeight?: number;
    marginWidth?: number;
    name?: string;
    sandbox?: string;
    scrolling?: string;
    seamless?: boolean;
    src?: string;
    srcDoc?: string;
    width?: number | string;
}