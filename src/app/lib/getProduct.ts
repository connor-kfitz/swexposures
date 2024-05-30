import { db } from "@/app/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function getProduct(productId: string): Promise<Product | null> {
    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) { return (docSnap.data() as Product) } 
    else { return null }    
}