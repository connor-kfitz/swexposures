"use client";
import Image from "next/image";
import Tag from "../../../../public/images/news/tag-icon.svg";
import NewsArticles from "../../data/news-articles.json";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import "./FullArticle.scss";

export default function FullArticle() {
  const pathname = usePathname();
  const pathnameArray = pathname.split("/");
  const id = pathnameArray[pathnameArray.length - 1];
  const articleData = NewsArticles.find(article => article.id = id);

    if (articleData) return (
      <main className="full-article">
        <section className="full-article__container">
          <img className="full-article__image" src={articleData.image} alt={articleData.alt}/>
          <h1 className="full-article__header">{articleData.title}</h1>
          <div className="full-article__info-container">
            <div className="full-article__tags-container">
              <div className="full-article__tag-label">
                <Image className="full-article__tag-icon" src={Tag} alt="Tag Icon"/>
                Tagged:
              </div>
              {articleData.tags?.map((tag, index) => (
                <Link className="full-article__tag" href="/" key={index}>{tag}</Link>
              ))}
            </div>
          </div>

        </section>
      </main>
    )
  }