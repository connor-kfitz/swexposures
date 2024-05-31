import { db } from "@/app/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function getProduct(articleId: string): Promise<NewsArticle | null> {
    const docRef = doc(db, "articles", articleId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) { return (docSnap.data() as NewsArticle) }
    else { return null }
}