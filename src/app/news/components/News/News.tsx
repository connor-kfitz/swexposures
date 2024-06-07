import Link from "next/link"
import "./News.scss";

type NewsProps = {
  newsArticles: NewsArticle[]
}

export default function News({ newsArticles }: NewsProps) {
  return (
    <section className="news">
      <div className="news__header-background">
        <h1 className="news__header">Latest News</h1>
      </div>
      <ul className="news__content">
        {newsArticles.map((article, index) => (
          <NewsArticle
            key={index}
            id={article.id} title={article.title} author={article.author}
            body={article.body} datePublished={article.datePublished}
            image={article.image.src}
          />
        ))}
      </ul>
    </section>
  )
}

type NewsArticleProps = {
  id: string,
  title: string,
  author: string,
  body: string,
  datePublished: string,
  image: string
}

function NewsArticle({ id, title, author, body, datePublished, image }: NewsArticleProps) {
  return (
    <li className="news-article">
      <article className="news-article__container">
        <Link className="news-article__image-container" href={"/news/" + id}>
          <img className="news-article__image" src={image} alt="" />
        </Link>
        <div className="news-article__content">
          <Link className="news-article__link" href={"/news/" + id}>
            <h2 className="news-article__header">{title}</h2>
          </Link>
          <p className="news-article__text">{body}</p>
          <Link className="news-article__keep-reading-link" href={"/news/" + id}>Keep reading</Link>
          <footer className="news-article__footer">
            <span className="news-article__author">
              by
              <Link className="news-article__author-link" href={"news/author/" + author}>{author}</Link>
            </span>
            <time>{datePublished}</time>
          </footer>
        </div>
      </article>
    </li>
  )
}
