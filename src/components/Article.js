import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import Voting from "./Voting"

const Article = ({vote, setVote, article, setArticle}) => {
    const {article_id} = useParams();

    if(Array.isArray(article)) {
        article = article[0];
    }
    
    useEffect(() => {
        fetch(`https://eddncnewsproject.herokuapp.com/api/articles/${article_id}`)
        .then(response => response.json())
        .then(article => setArticle(article))
    },[])
    
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
        setVote({article_id: 0, value: 0})

    }, [vote])

    if (!article) return "Loading..."
    return (
        <section>
        <h2>{article.title}</h2>
        <Voting article={article} articles={[article]} setArticles={setArticle} setVote={setVote} vote={vote}/>
        <p>{article.author} - {article.created_at}</p>
        <p>{article.body}</p>
        <hr></hr>
        <p>{article.comment_count} comments - t/{article.topic}</p>
        <p>Tap for comments...</p>
        <h3><Link to={`/articles/${article_id}/comments`}>Comments</Link></h3>
        </section>
    )
}

export default Article

//Article votes aren't updating when accesing page from home