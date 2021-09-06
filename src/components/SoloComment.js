import { useState } from "react"
import { Link } from "react-router-dom";

const SoloCommment = ({currentComment, article}) => {
    console.log(currentComment)
    return (
            <section>
                <Link to={`/articles/${article.article_id}`}>Back to Article</Link>
                <h2>Your new comment</h2>
                <hr />
                <p>{currentComment}</p>
            </section>
    )
}

export default SoloCommment;