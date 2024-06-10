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
    title: `Search Articles by Author: Explore a Curated Collection of Articles by ${author}`
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
