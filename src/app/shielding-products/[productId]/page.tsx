import getAllProducts from "@/app/lib/getAllProducts";
import getProduct from "@/app/lib/getProduct";
import Product from "./components/Product/Product";
import { Metadata } from "next";
import { notFound } from 'next/navigation'

type Params = {
  params: {
    productId: string
  }
}

export const revalidate = 60;

export async function generateMetadata({ params: { productId } }: Params): Promise<Metadata> {
  const product: Product | null = await getProduct(productId);

  if (!product) {
    return {
      title: "Product not found"
    }  
  }
  
  return {
    title: product.name,
    description: `This is the page of ${product.name}`
  }
}

export default async function ProductPage({ params: { productId } }: Params) {

  function youtubeURLId(url: string): string {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : '';
  }
  
  const product: Product | null = await getProduct(productId);
  if (!product) notFound();
  const videoId = youtubeURLId(product.videoURL);

  return (
    <main>
      <Product 
        name={product.name} model={product.model} description={product.description} images={product.images}
        features={product.features} specifications={product.specifications} table={product.table} videoId={videoId}
      />
    </main>
  )
}

export async function generateStaticParams() {
  let products: Product[] = await getAllProducts();
  return products.map(product => ({
    productId: product.id
  }))
}