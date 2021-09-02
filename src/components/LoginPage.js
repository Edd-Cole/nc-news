import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [loginUser, setLoginUser] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    return (
        <section>
            <br></br>
            <Link to="/users/create_an_account"><button className="">Create an Account</button></Link>
            <br></br>
        <form className="">
        <label htmlFor="loginUsername" />
        <input id="loginUsername" placeholder="Username" type="text" value={loginUser} onChange={(event) => setLoginUser(event.target.value)}/><br></br>
        <label htmlFor="loginPassword" />
        <input id="loginPassword" placeholder="Password" type="password" value={loginPassword} onChange={(event) => {setLoginPassword(event.target.value)}}/><br></br>
        <button type="submit">Log in</button>
    </form>
    </section>
    )
}

export default LoginPage;