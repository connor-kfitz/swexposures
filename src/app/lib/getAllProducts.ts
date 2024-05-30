import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default async function getAllProducts(): Promise<Product[]> {
    const querySnapshot = await getDocs(collection(db, "products"));
    let products: Product[] = [];
    querySnapshot.forEach((doc) => {
            let data = doc.data();
            data['id'] = doc.id;
            products.push(data as Product);
        });
    return products
}