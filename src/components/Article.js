import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

const Article = () => {
    const [article, setArticle] = useState({})
    const {article_id} = useParams();

    useEffect(() => {
        fetch(`https://eddncnewsproject.herokuapp.com/api/articles/${article_id}`)
        .then(response => response.json())
        .then(article => setArticle(article))
    }, [])

    return (
        <section>
        <h2>{article.title}</h2>
        <p>{article.author} - {article.created_at}</p>
        <p>{article.body}</p>
        <hr></hr>
        <p>{article.comment_count} comments - t/{article.topic}</p>
        <p>Tap for comments...</p>
        <h3><Link to={`/articles/${article_id}/comments`}>Comments</Link></h3>
        </section>
    )
}

export default Article