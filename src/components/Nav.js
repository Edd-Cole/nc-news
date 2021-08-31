import { NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <section className="NavBar">
            <ul>
                <NavLink to="/" activeClassName="currentNav" className="nav">Articles</NavLink>
                <NavLink to="/topics" activeClassName="currentNav" className="nav">Topics</NavLink>
                <NavLink to="/users" activeClassName="currentNav" className="nav">Users</NavLink>
            </ul>
        </section>
    )
}

export default Nav;