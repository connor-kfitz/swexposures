import ArticleSearchBy from "@/app/components/ArticleSearchBy/ArticleSearchBy";
import getArticleByAuthor from "@/app/lib/getArticleByAuthor";
import { Metadata } from "next";
import "./AuthorPage.scss";

type Params = {
  params: {
    author: string
  }
}

export async function generateMetadata({ params: { author } }: Params): Promise<Metadata> {
  return {
    title: author,
    description: `This is the page of ${author}`
  }
}

export default async function AuthorPage({ params: { author } }: Params) {

  const articles = await getArticleByAuthor(author);

  return (
    <main>
      <ArticleSearchBy searchType="Author" searchValue={author} articles={articles} />
    </main>
  )
}
