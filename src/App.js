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
import CreateArticle from './components/CreateArticle';
import CreateComment from './components/CreateComment';
import LoggedInAsUser from './components/LoggedInAsUser';
import NullPage from './components/NullPage';
import UpdateComment from './components/UpdateComment';
import SoloCommment from './components/SoloComment';
import UpdateUser from './components/UpdateUser';
import CommentDeleteMessage from './components/CommentDeleteMessage';

function App() {
    const [currentUser, setCurrentUser] = useState("grumpy19")
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState({})
    const [vote, setVote] = useState({article_id: 0, value: 0})
    const [commentValue, setCommentValue] = useState({comment_id: 0, value: 0})
    const [searchQuery, setSearchQuery] = useState("")
    const [page, setPage] = useState(1);
    const [username, setUsername] = useState("");
    const [currentComment, setCurrentComment] = useState("");

    return (
    <section className="App">
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <Nav setPage={setPage}/>
        <Switch>
            <Route exact path="/">
                <Home articles={articles} setArticles={setArticles} vote={vote} setVote={setVote} article={article} searchQuery={searchQuery} setSearchQuery={setSearchQuery} page={page} setPage={setPage} currentUser={currentUser}/>
            </Route>
            <Route exact path="/users">
                <Users />
            </Route>
            <Route exact path="/users/create_an_account">
                <CreateAccount setCurrentUser={setCurrentUser} username={username} setUsername={setUsername}/>
            </Route>
            <Route exact path="/users/create_account_success">
                <AccountCreationSuccess username={username}/>
            </Route>
            <Route exact path="/users/:username/edit">
                <UpdateUser currentUser={currentUser}/>
            </Route>
            <Route exact path="/users/:username">
                <Username vote={vote} setVote={setVote} article={article} setPage={setPage} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            </Route>
            <Route exact path="/articles/create_new_article">
                {/* <LoggedInAsUser currentUser={currentUser}> */}
                    <CreateArticle currentUser={currentUser}/>
                {/* </LoggedInAsUser> */}
            </Route>
            <Route exact path="/articles/:article_id/comments/create_new_comment">
                <LoggedInAsUser currentUser={currentUser}>
                    <CreateComment currentUser={currentUser}/>
                    <NullPage />
                </LoggedInAsUser>
            </Route>
            <Route exact path="/articles/:article_id">
                <Article article={article} setArticle={setArticle} vote={vote} setVote={setVote} commentValue={commentValue} setCommentValue={setCommentValue} setPage={setPage} currentUser={currentUser}/>
            </Route>
            <Route exact path="/articles/:article_id/comments">
                <Comments currentUser={currentUser} articles={articles} article={article} setArticle={setArticle} setVote={setVote} commentValue={commentValue} setCommentValue={setCommentValue} page={page} setPage={setPage}/>
            </Route>
            <Route exact path="/topics">
                <Topics currentUser={currentUser}/>
            </Route>
            <Route exact path="/topics/create_new_topic">
                    <CreateTopic currentUser={currentUser}/>
            </Route>
            <Route exact path="/loginpage">
                <LoggedInAsUser currentUser={currentUser}>
                    <NullPage />
                    <LoginPage setCurrentUser={setCurrentUser}/>
                </LoggedInAsUser>
            </Route>
            <Route exact path="/comments/delete_message">
                <CommentDeleteMessage article={article}/>
            </Route>
            <Route exact path="/comments/:comment_id/edit">
                <UpdateComment currentComment={currentComment} setCurrentComment={setCurrentComment}/>
            </Route>
            <Route exact path="/comments/:comment_id">
                <SoloCommment currentComment={currentComment} article={article}/>
            </Route>
        </Switch>
    </section>
  )}

export default App;
