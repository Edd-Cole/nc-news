import { useEffect, useState } from "react";
import { useParams } from "react-router";
const {createNew} = require("../utils")

const Comments = ({article, setArticle, setVote}) => {
    const {article_id} = useParams();
    const [comments, setComments] = useState([])
    const [commentValue, setCommentValue] = useState({})
   
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

    const commentVote = (comment_id, value) => {
        const newComments = createNew(comments)
        let commentsArray;
        if(value === "+") {
        commentsArray = newComments.map(comment => {
            if(comment.comment_id === comment_id) {
                comment.votes += 1;
            }
            return comment
        })
        } else if (value === "-") {
            commentsArray = newComments.map(comment => {
                if(comment.comment_id === comment_id) {
                    comment.votes -= 1;
                }
                return comment;
            })
        }
        setComments(commentsArray)
    }

    return (
        <section>
            <h2>{article.title}</h2>
            <hr />
            {comments.map(comment => {
                return <section key={comment.comment_id} className="commentSection">
                <form className="commentVotesForm" onClick={(event) => {
                    event.preventDefault()
                    commentVote(comment.comment_id, event.target.value);
                    setCommentValue({comment_id: comment.comment_id, value: (event.target.value === "+" ? 1 : -1)})
                    }}>
                <label>
                    <input type="submit" value="+"/>
                </label>
                <h3>{comment.votes}</h3>
                <label>
                    <input type="submit" value="-" />
                </label>
                </form>
                    <section className="commentInfo">
                    <h3>{comment.author}</h3>
                    <p>{comment.body}</p>
                    </section>
                </section>
            })}
        </section>
    )
}

export default Comments;

//page and limits
//fix too many fetches