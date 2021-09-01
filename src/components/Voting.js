import { useEffect } from "react"
const {voteArticle}= require("../utils.js")

const Voting = ({articles, setArticles, article, setVote}) => {

    return (
        <form className="articleVotesForm" onClick={(event) => {
            event.preventDefault();
            voteArticle(event, articles, article.article_id, setArticles, setVote, article)
            }
            }>
            <label>
            <input type="submit" value="+"/>
            </label>
            <h3>{article.votes}</h3>
            <label>
                <input type="submit" value="-" />
            </label>
        </form>
    )
}

export default Voting;