import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import VotingComment from "./VotingComment";
const {commentVote} = require("../utils")

const Comments = ({article, setArticle, setVote, commentValue, setCommentValue}) => {
    const {article_id} = useParams();
    const [comments, setComments] = useState([])
   
    useEffect(() => {
        fetch(`https://eddncnewsproject.herokuapp.com/api/articles/${article_id}`)
        .then(response => response.json())
        .then(article => setArticle(article))
        fetch(`https://eddncnewsproject.herokuapp.com/api/articles/${article_id}/comments`)
        .then(response => response.json())
        .then(({comments}) => setComments(comments))
        setVote({article_id: article.article_id, value: 0})
    }, [])

    useEffect(() => {
        fetch(`https://eddncnewsproject.herokuapp.com/api/articles/${article_id}/comments`, {
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
    }, [comments])

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

    return (
        <section>
            <h2>{article.title}</h2>
            <Link to={`/articles/${article_id}`}>Back to Article</Link>
            <hr />
            {comments.map(comment => {
                return <section key={comment.comment_id} className="commentSection">
                <VotingComment comment={comment} comments={comments} setComments={setComments} setCommentValue={setCommentValue}/>
                </section>
            })}
        </section>
    )
}

export default Comments;

//page and limits
//fix too many fetches