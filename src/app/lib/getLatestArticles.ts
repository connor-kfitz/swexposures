import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { dateToDMonthY } from "../common/utils";

export default async function getLatestArticles(): Promise<NewsArticle[]> {
    const articlesRef = collection(db, "articles");
    const q = query(articlesRef, orderBy("createdAt", "desc"), limit(3));
    const querySnapshot = await getDocs(q);
    let articles: NewsArticle[] = [];
    querySnapshot.forEach((doc) => {
        let data = doc.data();
        data['id'] = doc.id;
        data['datePublished'] = dateToDMonthY(new Date(doc.data().datePublished * 1000))
        data['createdAt'] = dateToDMonthY(new Date(doc.data().createdAt * 1000))
        articles.push(data as NewsArticle);
    });
    return articles;
}