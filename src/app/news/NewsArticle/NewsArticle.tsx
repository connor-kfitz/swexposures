import Link from "next/link"
import "./NewsArticle.scss";

type NewsArticleProps = {
  id: string,
  title: string,
  author: string,
  body: string,
  datePublished: string,
  image: string
}

export default function NewsArticle({id, title, author, body, datePublished, image}: NewsArticleProps) {

  return (
    <article className="news-article">
      <Link className="news-article__image-container" href={"/news/" + id}>
        <img className="news-article__image" src={image} alt=""/> 
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
            <Link className="news-article__author-link" href={"news/author?=" + author}>{author}</Link>
          </span>
          <time>{datePublished}</time>
        </footer>
      </div>
    </article>
  )
}
