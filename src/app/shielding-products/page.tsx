import { Metadata } from "next"
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import ProductCard from "./ProductCard/ProductCard";
import "./ShieldingProducts.scss";

export const metadata: Metadata = {
  title: 'Shielding Products',
}

export default async function ShieldingProducts() {

  const querySnapshot = await getDocs(collection(db, "products"));
  let products: Product[] = [];
  querySnapshot.forEach((doc) => {
    let data = doc.data();
    data['id'] = doc.id;
    products.push(data as Product);
  });
  
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
