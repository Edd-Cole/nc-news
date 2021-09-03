const {commentVote} = require("../utils")

const VotingComment = ({comment, comments, setComments, setCommentValue}) => {
    if(comment === undefined || comment.votes) return <p>No comments yet, be the first...</p>
return  (
<section className="commentSection">
<form className="commentVotesForm" onClick={(event) => {
                    event.preventDefault()
                    commentVote(comment.comment_id, event.target.value, comments, setComments);
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
                        </section>)
}

export default VotingComment;