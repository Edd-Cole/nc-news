import LogIn from "./LogIn";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">
            <h1 className="companyName">Thread-it</h1>
            <p>Reddit, but with competent Admins</p>
            <LogIn />
            </Link>
        </header>
    )
}

export default Header;