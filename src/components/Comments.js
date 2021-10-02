import { useEffect, useState } from "react"
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
            setAllComments( comments )
        })
    }, [])

    return (
        <section>
            <hr />
            {allComments.map(comment => {
                return <section key={comment.comment_id} className="commentSection">
                <VotingComment currentUser={currentUser} comment={comment} comments={allComments} setComments={setAllComments} setCommentValue={setCommentValue} setPage={setPage}/>
                </section>
            })}
            <PrevPage page={page} setPage={setPage}/>
            <NextPage setPage={setPage} />
        </section>
    )
}

export default AllComments;