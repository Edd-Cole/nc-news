import './App.css';
import {Route, Switch} from "react-router-dom"
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <section className="App">
        <Header />
        <Nav />
        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </section>
  )}

export default App;
