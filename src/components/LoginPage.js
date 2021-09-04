import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const LoginPage = (setCurrentUser) => {
    const [loginUser, setLoginUser] = useState("grumpy19");
    const [loginPassword, setLoginPassword] = useState("IAmSuperGrumpy");
    const redirect = useHistory()

    return (
        <section>
            <br />
            <Link to="/users/create_an_account"><button className="">Create an Account</button></Link>
            <br />
            <br />
            <hr />
            <br />
        <form className="loginUserForm" onChange={(event) => {
            event.preventDefault();
            setCurrentUser(loginUser);
            redirect.push("/")
        }}>
        <label htmlFor="loginUsername">Username:* </label>
        <input id="loginUsername" type="text" value={loginUser} onChange={(event) => setLoginUser(event.target.value)} required/><br></br>
        <label htmlFor="loginPassword">Password:* </label>
        <input id="loginPassword" type="password" value={loginPassword} onChange={(event) => {setLoginPassword(event.target.value)}} required/><br></br>
        <br />
        <button type="submit">Log in</button>
    </form>
    </section>
    )
}

export default LoginPage;