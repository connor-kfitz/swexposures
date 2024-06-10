
import getArticle from "@/app/lib/getArticle";
import getLatestArticles from "@/app/lib/getLatestArticles";
import Article from "./components/Article/Article";
import { Metadata } from "next";

type Params = {
  params: {
    articleId: string
  }
}

export const revalidate = 60;

export async function generateMetadata({ params: { articleId } }: Params): Promise<Metadata> {
  const article: NewsArticle | null = await getArticle(articleId);

  if (!article) {
    return {
      title: "Article not found"
    }
  }

  return {
    title: article.title,
    description: `This is the page of ${article.title}`
  }
}

export default async function FullArticlePage({ params: { articleId } }: Params) {

  const article: NewsArticle | null = await getArticle(articleId);

    if (article) return (
      <main className="full-article">
        <Article image={article.image.src} title={article.title} body={article.body} tags={article.tags}/>
      </main>
    )
  }

export async function generateStaticParams() {
  let articles: NewsArticle[] = await getLatestArticles(10);
  return articles.map(article => ({
    articleId: article.id
  }))
}