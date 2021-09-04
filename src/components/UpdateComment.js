import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { editComment } from "../utils";

const UpdateComment = ({currentComment, setCurrentComment}) => {
    const {comment_id} = useParams();
    const redirect = useHistory();

    useEffect(() => {
        fetch(`https://eddncnewsproject.herokuapp.com/api/comments/${comment_id}`)
        .then(response => response.json())
        .then(comment => {
            setCurrentComment(comment.body)
        })
    }, [])

    return (
        <section>
        <form class="newCommentForm" onSubmit={(event) => {
            event.preventDefault();
            editComment(comment_id, currentComment)
            .then((comment) => {
                if(typeof(comment.comment_id) === "number" ) {
                    redirect.push(`/comments/${comment_id}/`)
                }
            })
        }}>
            <label for="newCommentBody">Body:*</label><br />
            <textarea id="currentComment" cols="40" rows="20" value={currentComment} onChange={(event) => setCurrentComment(event.target.value)}/>
            <br />
            <br />
            <input id="newCommentSubmitButton" type="submit" value="Edit comment"/>
        </form><br />
        </section>
    )
}

export default UpdateComment;