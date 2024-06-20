import getLatestArticles from "../lib/getLatestArticles";
import News from "./components/News/News";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest News About South West Exposures"
}

export const revalidate = 60;

export default async function NewsPage() {

  let newsArticles: NewsArticle[] = await getLatestArticles(10);

  return (
    <main>
      <News newsArticles={newsArticles} />
    </main>
  )
}
