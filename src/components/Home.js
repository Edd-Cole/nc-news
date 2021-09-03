import { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { extractSearchValue } from "../utils";
import AddArticle from "./AddArticle";
import NextPage from "./NextPage";
import PrevPage from "./PrevPage";
import Voting from "./Voting"

const Home = ({articles, setArticles, vote, setVote, article, searchQuery, setSearchQuery, page, setPage}) => {
    console.log(article)
    console.log(articles)
    const {search} = useLocation()
    if(search) {
        let value = extractSearchValue(search);
        setSearchQuery("&topic=" + value)
    } else {
        setSearchQuery("")
    }
    
    useEffect(() => {
        fetch(`https://eddncnewsproject.herokuapp.com/api/articles?sort_by=created_at&limit=20&order=descending&page=${page}${searchQuery}`)
        .then(articles => {
            return articles.json();
        })
        .then(({articles}) => {
            return setArticles(articles);
        })
        setVote({article_id: article.article_id, value: 0})
    }, [searchQuery, page])

    useEffect(() => {
        fetch(`https://eddncnewsproject.herokuapp.com/api/articles/${vote.article_id}`, {
            method: "PATCH",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({inc_votes: vote.value})
        }).then(response => response.json())
    }, [vote])

    return (
        <section className="homePage">
            <AddArticle />
            <ul>
                {articles.map(article => {
                    const commentLink = `/articles/${article.article_id}/comments`;
                    const userLink = `/users/${article.author}`
                    return <section className="articleHomepage" key={article.article_id}>
                        <Voting article={article} setVote={setVote} articles={articles} setArticles={setArticles} vote={vote}/>
                        <Link className="articleLink" to={`/articles/${article.article_id}`}>
                        <section className="articleTitle">
                            <h3>{article.title}</h3>
                            <p>{article.body.length > 75 ? article.body.slice(0,71) + "..." : article.body}</p>
                        </section>
                        </Link>
                        <section className="articleInfo">
                            <p><Link to={`/?topic=${article.topic}`}>t/{article.topic}</Link> &nbsp;-&nbsp; 
                            {article.comment_count} <Link to={commentLink} onClick={() => setPage(1)}>Comments</Link> &nbsp;-&nbsp; 
                            <Link to={userLink}>{article.author.length < 10 ? article.author : article.author.slice(0,6) + "..."}</Link> &nbsp;- &nbsp;
                            {article.created_at.slice(0,10)}</p>
                        </section>
                    </section>
                })}
            </ul>
            <PrevPage page={page} setPage={setPage}/>
            <NextPage setPage={setPage} />
        </section>
    )
}

export default Home;
