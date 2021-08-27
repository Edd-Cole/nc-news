import { NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <section className="NavBar">
            <ul>
                <NavLink to="/articles" className="nav">Articles</NavLink>
                <NavLink to="/topics" className="nav">Topics</NavLink>
                <NavLink to="/users" className="nav">Users</NavLink>
            </ul>
        </section>
    )
}

export default Nav;