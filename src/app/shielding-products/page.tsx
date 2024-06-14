import getAllProductCategories from "../lib/getAllProductCategories";
import getAllProducts from "../lib/getAllProducts";
import Products from "./components/Products/Products";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nuclear Medical Shielding Products"
}

export default async function ShieldingProductsPage() {

  let productCategories: ProductCategory[] = await getAllProductCategories(); 
  let products: Product[] = await getAllProducts();
  
  return (
    <main className="shielding-products">
      <Products products={products} productCategories={productCategories}/>
    </main>
  )
}
