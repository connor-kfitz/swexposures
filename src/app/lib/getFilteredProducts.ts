import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { SortDirection } from "../common/enums";

export default async function getFilteredProducts(category: string, sortDirection: SortDirection): Promise<Product[]> {
    let conditions = [];
    if (category) conditions.push(where("category", "==", category));
    if (sortDirection) conditions.push(orderBy('name', sortDirection === SortDirection.Ascending ? "asc" : "desc"));
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