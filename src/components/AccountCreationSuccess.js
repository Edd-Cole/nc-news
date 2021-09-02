import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AccountCreationSuccess = ({username}) => {
    const [user, setUser] = useState({username: "jellyjess"})
    useEffect(() => {
        fetch(`https://eddncnewsproject.herokuapp.com/api/users/${username}`)
        .then(response => response.json())
        .then(({users}) => {
            console.log(users)
            setUser(users)
        })
    },[])

    return (
        <section>
            <h3>Success!</h3>
            <p>Your account details are as follows:</p>
            <p>Username: {user.username}</p>
            <img src={user.avatar_url} alt={user.avatar_url ? `${user.username} avatar` : `no avatar`}></img>
            <p>Why don't you get started and have a look at some <Link to="/topics">topics</Link></p>
        </section>
    )
}

export default AccountCreationSuccess;