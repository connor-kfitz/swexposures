import Link from "next/link";
import Markdown from "react-markdown";
import "./ArticleSearchBy.scss";

type ArticleSearchByProps = {
  searchType: string,
  searchValue: string,
  articles: NewsArticle[]
}

type ArticleProps = {
  title: string,
  author: string,
  body: string,
  id: string
}

export default function ArticleSearchBy({ searchType, searchValue, articles }: ArticleSearchByProps) {
  return (
    <section className="article-search">
      <div className="article-search__title-container">
        <h1 className="article-search__title">{searchType}: {searchValue}</h1>
      </div>
      <div className="article-search__list-container">
        <ul className="article-search__list">
          {articles.map((article, index) => (
            <Article
              title={article.title} author={article.author}
              body={article.body} id={article.id} key={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function Article({ title, author, body, id }: ArticleProps) {
  return (
    <li className="article">
      <article className="article__container">
        <header className="article__header">
          <h2 className="article__title"><Link className="article__title-link" href={`/news/${id}`}>{title}</Link></h2>
          <div className="article__author">Posted By <Link className="article__author-link" href={`/news/author/${author}`}>{author}</Link></div>
        </header>
        <div className="article__content-container">
          <Markdown>{body}</Markdown>
        </div>
      </article>
    </li>
  )
}
