import { Link } from "react-router-dom";

const CommentDeleteMessage = ({article}) => {
    return (
        <section>
            <p>Comment deleted</p>
            <Link to={`/articles/${article.article_id}/comments`}>Back to Comments</Link>
        </section>
    )
}

export default CommentDeleteMessage;