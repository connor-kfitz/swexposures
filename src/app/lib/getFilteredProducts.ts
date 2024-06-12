import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default async function getFilteredProducts(category: string): Promise<Product[]> {
    let conditions = [];
    if (category) conditions.push(where("category", "==", category))
    const productsRef = collection(db, "products");
    const q = query(productsRef, ...conditions);
    const querySnapshot = await getDocs(q);
    let products: Product[] = [];
    querySnapshot.forEach((doc) => {
        let data = doc.data();
        data['id'] = doc.id;
        products.push(data as Product);
    });
    return products;
}