import { Link } from "react-router-dom"

const AddComment = ({article_id}) => {
    return (
        <Link to={`/articles/${article_id}/comments/create_new_comment`}><button>Add Comment</button></Link>
    )
}

export default AddComment;