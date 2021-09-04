import { Link } from "react-router-dom";

const EditComment = ({currentUser, author, comment_id}) => {
    console.log(currentUser, author)
    if(currentUser !== author) return null;
    return (
        <Link className="editCommentLink" to={`/comments/${comment_id}/edit`}>Edit</Link>
    )
}

export default EditComment;