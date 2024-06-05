import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { dateToDMonthY } from "../common/utils";

export default async function getLatestArticles(amount: number): Promise<NewsArticle[]> {
    const articlesRef = collection(db, "articles");
    const q = query(articlesRef, orderBy("createdAt", "desc"), limit(amount));
    const querySnapshot = await getDocs(q);
    let articles: NewsArticle[] = [];
    querySnapshot.forEach((doc) => {
        let data = doc.data();
        data['id'] = doc.id;
        data['datePublished'] = dateToDMonthY(doc.data().datePublished.toDate())
        data['createdAt'] = dateToDMonthY(doc.data().createdAt.toDate())
        articles.push(data as NewsArticle);
    });
    return articles;
}