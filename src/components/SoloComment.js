import { useState } from "react"
import { Link } from "react-router-dom";

const SoloCommment = ({currentComment}) => {
    return (
            <section>
                <h2>{currentComment.title}</h2>
                <Link to={`/articles/${currentComment.article_id}`}>Back to Article</Link>
                <hr />
                <h2>{currentComment.title}</h2>
                <p>{currentComment.body}</p>
            </section>
    )
}

export default SoloCommment;