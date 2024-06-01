import { Metadata } from "next"
import ProductCard from "./ProductCard/ProductCard";
import getAllProducts from "../lib/getAllProducts";
import "./ShieldingProductsPage.scss";

export const metadata: Metadata = {
  title: 'Shielding Products',
}

export default async function ShieldingProductsPage() {

  let products: Product[] = await getAllProducts();
  
  return (
    <main className="shielding-products">
      <section className="shielding-products__products">
        <ul className="shielding-products__products-container">
          {products.map((product, index) => (
            <ProductCard image={product.images[0]} name={product.name} model={product.model} description={product.description} id={product.id} key={index}/>
          ))}
        </ul>
      </section>
    </main>
  )
}
