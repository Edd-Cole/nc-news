import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://eddncnewsproject.herokuapp.com/api/users")
        .then(response => response.json())
        .then(({users}) => {
            setUsers(users)})
    },[])
    return (
        <section>
        <h2>Users</h2>
        <ul>
            {users.map(user => {
                return (
                    <section key={user.username}>
                        <h3><Link to={`/users/${user.username}`}>{user.username}</Link></h3>
                        <img className="userAvatar" src={user.avatar_url} alt={user.username}></img>
                    </section>
                )
            })}
        </ul>
        </section>
    )
}

export default Users;