import './App.css';
import {Router, Switch} from "react-router"
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <section className="App">
        <Header />
        <Nav />
        <Switch>
            <Router path="/">
                <Home />
            </Router>
        </Switch>
    </section>
}

export default App;
