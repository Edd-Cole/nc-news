const {voteArticle}= require("../utils.js")

const Voting = ({articles}) => {
    return (
        <form className="articleVotesForm" onClick={(event) => {
            event.preventDefault();
            voteArticle(event, articles, article.article_id, setArticles)
            setVote({article_id: article.article_id, value: (event.target.value === "+" ? 1 : -1)})
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