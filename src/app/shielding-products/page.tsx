import getAllProducts from "../lib/getAllProducts";
import Products from "./components/Products/Products";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Shielding Products',
}

export default async function ShieldingProductsPage() {

  let products: Product[] = await getAllProducts();
  
  return (
    <main className="shielding-products">
      <Products products={products}/>
    </main>
  )
}
