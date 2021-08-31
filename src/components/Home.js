import { useState, useEffect } from "react";
import { createNew, voteArticle } from "../utils";
import { Link } from "react-router-dom";

const Home = ({articles, setArticles}) => {
    const [vote, setVote] = useState({article_id: 0, value: 0})

    useEffect(() => {
        fetch(`https://eddncnewsproject.herokuapp.com/api/articles/${vote.article_id}`, {
            method: "PATCH",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({inc_votes: vote.value})
        }).then(response => response.json())
    }, [vote])

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
                            voteArticle(event, articles, article.article_id, setArticles)
                            setVote({article_id: article.article_id, value: (event.target.value === "+" ? 1 : -1)})
                            }
                            }>
                            <label>
                            <input type="submit" value="+"/>
                            </label>
                            <h3>{article.votes}</h3>
                            <label>
                                <input type="submit" value="-" />
                            </label>
                        </form>
                        <Link className="articleLink" to={`/articles/${article.article_id}`}>
                        <section className="articleTitle">
                            <h3>{article.title}</h3>
                            <p>{article.body.length > 75 ? article.body.slice(0,71) + "..." : article.body}</p>
                        </section>
                        </Link>
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
