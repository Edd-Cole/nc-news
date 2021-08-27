import { useState, useEffect } from "react";
import { createNew } from "../utils";

const Home = () => {
    const [articles, setArticles] = useState([])

    const voteArticle = (event, created_at) => {
        const newArticles = createNew(articles);
        if(event.target.value = "+") {
            newArticles.map(article => {
                if(created_at = article.created_at) {
                    article.votes++;
                    return article;
                }
                return article;
            })
        } else if (event.target.value = "-") {
            newArticles.map(article => {
                if(created_at = article.created_at) {
                    article.votes--;
                    return article;
                }
                return article;
            })
    }
    setArticles(newArticles)
}

    useEffect(() => {
        fetch("https://eddncnewsproject.herokuapp.com/api/articles?sort_by=created_at&limit=20&order=descending")
        .then(articles => {
            return articles.json();
        })
        .then(({articles}) => {
            return setArticles(articles);
        })
    }, [])

    return (
        <section className="homePage">
            <ul>
                {articles.map(article => {
                    return <section className="articleHomepage" key={article.created_at}>
                        <form className="articleVotesForm" onClick={(event) => {
                            event.preventDefault();
                            voteArticle(event, article.created_at)}
                            }>
                            <label>
                            <input type="submit" value="+"/>
                            </label>
                            <h3>{article.votes}</h3>
                            <label>
                                <input type="submit" value="-" />
                            </label>
                        </form>
                        <section className="articleTitle">
                            <h3>{article.title}</h3>
                        </section>
                    </section>
                })}
            </ul>
        </section>
    )
}

export default Home;

//patch the increased votes into the database