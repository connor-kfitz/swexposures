import Link from "next/link";
import getLatestArticles from "@/app/lib/getLatestArticles";
import "./LatestNews.scss";

type ArticleProps = {
  id: string,
  image: string,
  title: string,
  datePublished: string,
  body: string
}

export default async function LatestNews() {

  const articles: NewsArticle[] = await getLatestArticles(2);

  return (
    <section className="latest-news">
    <h2 className="latest-news__header">Latest News</h2>
    <ul className="latest-news__content-container">
      {articles.map((article, index) => (
        <Article id={article.id} image={article.image.src} title={article.title} 
          datePublished={article.datePublished} body={article.body} key={index}/>
      ))}
    </ul>
  </section>
  )
}

function Article({ id, image, title, datePublished, body }: ArticleProps) { 
  return (
    <li className="latest-news__item">
      <article className="latest-news__article">
        <Link className="latest-news__article-link" href={`/news/${id}`}>
          <img className="latest-news__article-image" src={image} alt="Article Header"/>
          <h3 className="latest-news__article-header">{title}</h3>
        </Link>
        <time className="latest-news__article-date">{datePublished}</time>
        <p className="latest-news__article-text">{body}</p>
        <Link className="latest-news__article-read-more" href={`/news/${id}`}>Read More</Link>
      </article>
    </li>
  )
}
