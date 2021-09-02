import { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
    const [loginUser, setLoginUser] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    return (
        <Link to="/loginpage"><button>Your Account</button></Link>
    )
}

export default LogIn;

//Post request for login
//redirect for create account button