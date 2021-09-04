import LogIn from "./LogIn";
import { Link } from "react-router-dom";
import LoggedInAsUser from "./LoggedInAsUser";
import LogOut from "./LogOut";

const Header = ({currentUser, setCurrentUser}) => {
    return (
        <header>
            <Link to="/">
            <h1 className="companyName">Thread-it</h1>
            <p>Reddit, but with competent Admins</p>
                <section className="LoginLogout">
            <LoggedInAsUser currentUser={currentUser}>
                <LogOut setCurrentUser={setCurrentUser}/>
                <LogIn setCurrentUser={setCurrentUser}/>
            </LoggedInAsUser>
                </section>
            </Link>
        </header>
    )
}

export default Header;