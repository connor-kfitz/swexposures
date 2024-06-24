import ArticleSearchBy from "@/app/components/ArticleSearchBy/ArticleSearchBy";
import getArticleByAuthor from "@/app/lib/getArticleByAuthor";
import { Metadata } from "next";

type Params = {
  params: {
    author: string
  }
}

export const revalidate = 60;

export async function generateMetadata({ params: { author } }: Params): Promise<Metadata> {
  return {
    title: `Search Articles by Author: Explore a Curated Collection of Articles by ${author}`,
    description: `Explore curated news articles written by ${author}. Our intuitive search feature delivers 
    up-to-date and insightful updates, keeping you informed with the latest stories directly related to the author you're interested in. 
    Explore now for a seamless news reading experience!`
  }
}

export default async function AuthorPage({ params: { author } }: Params) {

  author = author.replace(/-/g, ' ');
  const articles = await getArticleByAuthor(author);

  return (
    <main>
      <ArticleSearchBy searchType="Author" searchValue={author} articles={articles} />
    </main>
  )
}
