import NewsArticles from "../data/news-articles.json";
import NewsArticle from "./NewsArticle/NewsArticle";
import "./News.scss";

export default function News() {

  return (
    <main className="news-page">
      <section className="news-section">
        <div className="news-section__header-background">
          <h1 className="news-section__header">Latest News</h1>
        </div>
        <div className="news-section__content">
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
