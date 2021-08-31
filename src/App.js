import './App.css';
import { useState } from 'react';
import {Route, Switch} from "react-router-dom"
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Users from "./components/Users"
import Username from './components/Username';
import Article from "./components/Article"

function App() {
    const [articles, setArticles] = useState([])

  return (
    <section className="App">
        <Header />
        <Nav />
        <Switch>
            <Route exact path="/">
                <Home articles={articles} setArticles={setArticles}/>
            </Route>
            <Route exact path="/users">
                <Users />
            </Route>
            <Route exact path="/users/:username">
                <Username />
            </Route>
            <Route exact path="/articles/:article_id">
                <Article articles={articles} setArticles={setArticles}/>
            </Route>
        </Switch>
    </section>
  )}

export default App;
