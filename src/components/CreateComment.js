import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { postNewComment } from "../utils";
import { Link } from "react-router-dom";

const CreateComment = ({currentUser}) => {
    const [newCommentBody, setNewCommentBody] = useState("");
    const {article_id} = useParams();
    const redirect = useHistory();

    return (
        <section>
            <h2>New comment</h2>
            <form class="newCommentForm" onSubmit={(event) => {
                event.preventDefault();
                postNewComment(currentUser, article_id, newCommentBody)
                .then((comment) => {
                    if(typeof(comment.comment_id) === "number" ) {
                        redirect.push(`/articles/${article_id}/comments?sort_by=created_at&order=desc`)
                    }
                })
            }}>
                <label for="newCommentBody">Body:*</label><br />
                <textarea id="newCommentBody" cols="40" rows="20" value={newCommentBody} onChange={(event) => setNewCommentBody(event.target.value)}/>
                <br />
                <br />
                <input id="newCommentSubmitButton" type="submit" value="Create comment"/>
            </form><br />
            <Link to={`/articles/${article_id}`}>Back to Article</Link>
        </section>
    )
}

export default CreateComment;