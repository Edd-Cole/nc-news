import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import AddComment from "./AddComment"
import Voting from "./Voting"
import VotingComment from "./VotingComment"

const Article = ({vote, setVote, article, setArticle, setCommentValue, commentValue, setPage}) => {
    const {article_id} = useParams();
    let [comment, setComment] = useState({});

    if(Array.isArray(comment)) [comment] = comment

    if(Array.isArray(article)) [article] = article;
    
    useEffect(() => {
        fetch(`https://eddncnewsproject.herokuapp.com/api/articles/${article_id}`)
        .then(response => response.json())
        .then(article => {
            setArticle(article)})
        fetch(`https://eddncnewsproject.herokuapp.com/api/articles/${article_id}/comments?limit=1`)
        .then(response => response.json())
        .then(comment => {
            if(comment.code !== 400){
                setComment(comment.comments[0])
            } else {
                setComment({author: "", body: "No comments"})
            }
        })
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
    }, [vote])

    useEffect(() => {
        fetch(`https://eddncnewsproject.herokuapp.com/api/comments/${commentValue.comment_id}`, {
            method: "PATCH",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({inc_votes: commentValue.value})
        }).then(response => response.json())
    }, [commentValue])

    if (!article) return "Loading..."
    return (
        <section className="articleSection">
            <section className="articleTop">
        <h2 className="articleHeading">{article.title}</h2>
        <Voting article={article} articles={[article]} setArticles={setArticle} setVote={setVote} vote={vote}/>
        </section>
        <p>{article.author} - {article.created_at}</p>
        <p>{article.body}</p>
        <hr></hr>
        <span className="articleFooterInfo"><Link to={`/articles/${article_id}/comments`} onClick={() => setPage(1)}>{article.comment_count} comments </Link> &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp; <Link to={`/?topic=${article.topic}`}>t/{article.topic}</Link></span>
        <section className="articleComments">
        <h3>Top Comment:</h3>
        <hr></hr>
        <VotingComment comment={comment} comments={[comment]} setComments={setComment} setCommentValue={setCommentValue}/>
        <br></br>
        <AddComment article_id={article_id}/>
        <br /><br />
        <Link to={`/articles/${article_id}/comments`}>More comments...</Link>
        <br></br>
        </section>
        </section>
    )
}

export default Article

//Article votes aren't updating when accesing page from home