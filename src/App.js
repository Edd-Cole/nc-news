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
import LoginPage from './components/LoginPage';
import CreateAccount from './components/CreateAccount';
import AccountCreationSuccess from './components/AccountCreationSuccess';
import CreateTopic from './components/CreateTopic';

function App() {
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState({})
    const [vote, setVote] = useState({article_id: 0, value: 0})
    const [commentValue, setCommentValue] = useState({comment_id: 0, value: 0})
    const [searchQuery, setSearchQuery] = useState("")
    const [page, setPage] = useState(1);
    const [username, setUsername] = useState("");

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
            <Route exact path="/users/create_an_account">
                <CreateAccount username={username} setUsername={setUsername}/>
            </Route>
            <Route exact path="/users/create_account_success">
                <AccountCreationSuccess username={username}/>
            </Route>
            <Route exact path="/users/:username">
                <Username articles={articles} setArticles={setArticles} vote={vote} setVote={setVote} article={article} searchQuery={searchQuery} setSearchQuery={setSearchQuery} page={page} setPage={setPage}/>
            </Route>
            <Route exact path="/articles/:article_id">
                <Article article={article} setArticle={setArticle} vote={vote} setVote={setVote} commentValue={commentValue} setCommentValue={setCommentValue} setPage={setPage}/>
            </Route>
            <Route exact path="/articles/:article_id/comments">
                <Comments articles={articles} article={article} setArticle={setArticle} setVote={setVote} commentValue={commentValue} setCommentValue={setCommentValue} page={page} setPage={setPage}/>
            </Route>
            <Route exact path="/topics">
                <Topics />
            </Route>
            <Route exact path="/topics/create_new_topic">
                <CreateTopic />
            </Route>
            <Route exact path="/loginpage">
                <LoginPage />
            </Route>
        </Switch>
    </section>
  )}

export default App;
