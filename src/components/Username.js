import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Username = () => {
    const [user, setUser] = useState({})
    const {username} = useParams();

    useEffect(() => {
        fetch(`https://eddncnewsproject.herokuapp.com/api/users/${username}`)
        .then(response => response.json())
        .then(({users}) => setUser(users))
    })
    return (
        <section>
            <h2>{user.username}</h2>
            <br></br>
            <img className="userAvatar" src={user.avatar_url} alt={user.username}></img>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/users">Back to Users</Link>
        </section>
    )
}

export default Username;