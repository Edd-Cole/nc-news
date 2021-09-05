import LogIn from "./LogIn";
import { Link } from "react-router-dom";
import LoggedInAsUser from "./LoggedInAsUser";
import LogOut from "./LogOut";
import YourAccount from "./YourAccount";

const Header = ({currentUser, setCurrentUser}) => {
    return (
        <header>
            <Link to="/">
            <h1 className="companyName">Thread-it</h1>
            <p>Reddit, but with competent Admins</p>
                <section className="LoginLogout">
            <LoggedInAsUser currentUser={currentUser}>
                <section>
                <LogOut setCurrentUser={setCurrentUser}/>
                <YourAccount currentUser={currentUser}/>
                </section>
                <LogIn setCurrentUser={setCurrentUser}/>
            </LoggedInAsUser>
                </section>
            </Link>
        </header>
    )
}

export default Header;