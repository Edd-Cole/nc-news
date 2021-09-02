import './App.css';
import { useState } from 'react';
import {Route, Switch} from "react-router-dom"
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Users from "./components/Users"
import Username from './components/Username';
import Article from "./components/Article"
import Comments from './components/Comment';
import Topics from './components/Topics';
import ArticlesByTopic from './components/ArticlesByTopic';

function App() {
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState({})
    const [vote, setVote] = useState({article_id: 0, value: 0})
    const [commentValue, setCommentValue] = useState({comment_id: 0, value: 0})
    const [searchQuery, setSearchQuery] = useState("")
    const [page, setPage] = useState(1);

  return (
    <section className="App">
        <Header />
        <Nav setPage={setPage}/>
        <Switch>
            <Route exact path="/">
                <Home articles={articles} setArticles={setArticles} vote={vote} setVote={setVote} article={article} searchQuery={searchQuery} setSearchQuery={setSearchQuery} page={page} setPage={setPage}/>
            </Route>
            <Route exact path="/users">
                <Users />
            </Route>
            <Route exact path="/users/:username">
                <Username />
            </Route>
            <Route exact path="/articles/:article_id">
                <Article article={article} setArticle={setArticle} vote={vote} setVote={setVote} commentValue={commentValue} setCommentValue={setCommentValue}/>
            </Route>
            <Route exact path="/articles/:article_id/comments">
                <Comments articles={articles} article={article} setArticle={setArticle} setVote={setVote} commentValue={commentValue} setCommentValue={setCommentValue}/>
            </Route>
            <Route exact path="/topics">
                <Topics />
            </Route>
        </Switch>
    </section>
  )}

export default App;

//Mulitple requests being sent out on voting trying to patch the database with incremental votes
//article component won't rerender when vote button clicked