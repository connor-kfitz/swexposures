import Image from "next/image";
import Tag from "../../../../public/images/news/tag-icon.svg";
import Link from "next/link";
import getArticle from "@/app/lib/getArticle";
import getLatestArticles from "@/app/lib/getLatestArticles";
import { Metadata } from "next";
import "./FullArticle.scss";

type Params = {
  params: {
    articleId: string
  }
}

export async function generateMetadata({ params: { articleId } }: Params): Promise<Metadata> {
  const article: NewsArticle | null = await getArticle(articleId);

  if (!article) {
    return {
      title: "User Not Found"
    }
  }

  return {
    title: article.title,
    description: `This is the page of ${article.title}`
  }
}

export default async function FullArticle({ params: { articleId } }: Params) {

  const article: NewsArticle | null = await getArticle(articleId);

    if (article) return (
      <main className="full-article">
        <section className="full-article__container">
          <img className="full-article__image" src={article.image.src} alt=""/>
          <h1 className="full-article__header">{article.title}</h1>
          <div className="full-article__info-container">
            <div className="full-article__tags-container">
              <div className="full-article__tag-label">
                <Image className="full-article__tag-icon" src={Tag} alt="Tag Icon"/>
                Tagged:
              </div>
              {article.tags?.map((tag, index) => (
                <Link className="full-article__tag" href={`/news/tag/${tag.toLowerCase()}`} key={index}>{tag}</Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    )
  }

export async function generateStaticParams() {
  let articles: NewsArticle[] = await getLatestArticles();
  return articles.map(article => ({
    articleId: article.id
  }))
}