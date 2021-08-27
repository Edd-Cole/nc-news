import { useState } from "react";

const LogIn = () => {
    const [loginUser, setLoginUser] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    return (
        <section>
            <form className="loginForm loginFormDesktop">
                <label htmlFor="loginUsername" />
                <input id="loginUsername" placeholder="Username" type="text" value={loginUser} onChange={(event) => setLoginUser(event.target.value)}/><br></br>
                <label htmlFor="loginPassword" />
                <input id="loginPassword" placeholder="Password" type="password" value={loginPassword} onChange={(event) => {setLoginPassword(event.target.value)}}/><br></br>
                <button type="submit">Log in</button>
            </form>
            <button className="signup" onClick={() => {
                return console.log("boo")
            }}>Create an Account</button>
        </section>
    )
}

export default LogIn;

//Post request for login
//redirect for create account button