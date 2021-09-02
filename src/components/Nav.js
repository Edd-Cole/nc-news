import { NavLink } from "react-router-dom";
const Nav = ({setPage}) => {
    return (
        <section className="NavBar">
            <ul>
                <NavLink to="/" activeClassName="currentNav" className="nav" onClick={() => setPage(1)}>Articles</NavLink>
                <NavLink to="/topics" activeClassName="currentNav" className="nav" onClick={() => setPage(1)}>Topics</NavLink>
                <NavLink to="/users" activeClassName="currentNav" className="nav" onClick={() => setPage(1)}>Users</NavLink>
            </ul>
        </section>
    )
}

export default Nav;