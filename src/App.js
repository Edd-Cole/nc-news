import './App.css';
import {Route, Switch} from "react-router-dom"
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Users from "./components/Users"
import Username from './components/Username';

function App() {
  return (
    <section className="App">
        <Header />
        <Nav />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/users">
                <Users />
            </Route>
            <Route exact path="/users/:username">
                <Username />
            </Route>
        </Switch>
    </section>
  )}

export default App;
