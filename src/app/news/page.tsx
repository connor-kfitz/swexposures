import getLatestArticles from "../lib/getLatestArticles";
import News from "./components/News/News";

export default async function NewsPage() {

  let newsArticles: NewsArticle[] = await getLatestArticles(10);

  return (
    <main>
      <News newsArticles={newsArticles} />
    </main>
  )
}
