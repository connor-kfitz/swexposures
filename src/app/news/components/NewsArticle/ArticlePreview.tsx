import Link from "next/link"
import "./ArticlePreview.scss";

type NewsArticleProps = {
  id: string,
  title: string,
  author: string,
  body: string,
  datePublished: string,
  image: string
}

export default function ArticlePreview({id, title, author, body, datePublished, image}: NewsArticleProps) {

  return (
    <article className="article-preview">
      <Link className="article-preview__image-container" href={"/news/" + id}>
        <img className="article-preview__image" src={image} alt=""/> 
      </Link>
      <div className="article-preview__content">
        <Link className="article-preview__link" href={"/news/" + id}>
          <h2 className="article-preview__header">{title}</h2>
        </Link>
        <p className="article-preview__text">{body}</p>
        <Link className="article-preview__keep-reading-link" href={"/news/" + id}>Keep reading</Link>
        <footer className="article-preview__footer">
          <span className="article-preview__author">
            by 
            <Link className="article-preview__author-link" href={"news/author/" + author}>{author}</Link>
          </span>
          <time>{datePublished}</time>
        </footer>
      </div>
    </article>
  )
}
