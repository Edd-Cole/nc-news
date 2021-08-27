import { useState, useEffect } from "react";
import { createNew } from "../utils";
import { Link } from "react-router-dom";

const Home = () => {
    const [articles, setArticles] = useState([])

    const voteArticle = (event, article_id) => {
        console.log(article_id);
        const newArticles = createNew(articles);
        if(event.target.value === "+") {
            console.log("+")
            newArticles.map(article => {
                if(article_id === article.article_id) {
                    article.votes++;
                    return article;
                }
                return article;
            })
        } else if (event.target.value === "-") {
            console.log("-")
            newArticles.map(article => {
                if(article_id === article.article_id) {
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
                    const commentLink = `/articles/${article.article_id}/comments`;
                    const userLink = `/users/${article.author}`
                    return <section className="articleHomepage" key={article.article_id}>
                        <form className="articleVotesForm" onClick={(event) => {
                            event.preventDefault();
                            voteArticle(event, article.article_id)}
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
                            <p>{article.body.length > 75 ? article.body.slice(0,71) + "..." : article.body}</p>
                        </section>
                        <section className="articleInfo">
                            <p>{article.comment_count} <Link to={commentLink}>Comments</Link> - <Link to={userLink}>{article.author}</Link> - {article.created_at.slice(0,10)}</p>
                        </section>
                    </section>
                })}
            </ul>
        </section>
    )
}

export default Home;

//patch the increased votes into the database