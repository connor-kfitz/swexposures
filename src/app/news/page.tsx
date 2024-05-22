import NewsArticles from "../data/news-articles.json";
import NewsArticle from "./NewsArticle/NewsArticle";
import "./News.scss";

export default function News() {

  return (
    <main className="news">
      <section className="latest-news">
        <div className="latest-news__header-background">
          <h1 className="latest-news__header">Latest News</h1>
        </div>
        <div className="latest-news__content">
          {NewsArticles.map((article, index) => (
            <NewsArticle
              key={index}
              id={article.id} image={article.image} alt={article.alt} title={article.title} 
              description={article.description} author={article.author} date={article.date}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
