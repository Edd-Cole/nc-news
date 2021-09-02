import LogIn from "./LogIn";

const Header = () => {
    return (
        <header>
            <h1 className="companyName">Thread-it</h1>
            <p>Reddit, but with competent Admins</p>
            <LogIn />
        </header>
    )
}

export default Header;