import { NavLink } from "react-router-dom";
const Nav = ({setPage}) => {
    return (
        <section className="NavBar">
            <ul>
                <li><NavLink to="/" activeClassName="currentNav" className="nav" onClick={() => setPage(1)}>Articles</NavLink></li>
                <li><NavLink to="/topics" activeClassName="currentNav" className="nav" onClick={() => setPage(1)}>Topics</NavLink></li>
                <li><NavLink to="/users" activeClassName="currentNav" className="nav" onClick={() => setPage(1)}>Users</NavLink></li>
                <li><NavLink to="/comments" activeClassName="currentNav" className="nav" onClick={() => setPage(1)}>Comments</NavLink></li>
            </ul>
        </section>
    )
}

export default Nav;