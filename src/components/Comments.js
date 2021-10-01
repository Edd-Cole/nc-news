import { useEffect, useState } from "react"
import DeleteComment from "./DeleteComment";
import PrevPage from "./PrevPage";
import VotingComment from "./VotingComment";
import NextPage from "./NextPage";

const AllComments = ({currentUser, page, setPage, setCommentValue}) => {
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        fetch("https://eddncnewsproject.herokuapp.com/api/comments")
        .then((comments) => {
            return comments.json();
        })
        .then(({comments}) => {
            console.log(comments)
            setAllComments( comments )
        })
    }, [])

    return (
        <section>
            <hr />
            {allComments.map(comment => {
                return <section key={comment.comment_id} className="commentSection">
                {currentUser === comment.author ? <DeleteComment comment_id={comment.comment_id} setPage={setPage}/> : null}
                <VotingComment currentUser={currentUser} comment={comment} comments={allComments} setComments={setAllComments} setCommentValue={setCommentValue}/>
                </section>
            })}
            <PrevPage page={page} setPage={setPage}/>
            <NextPage setPage={setPage} />
        </section>
    )
}

export default AllComments;