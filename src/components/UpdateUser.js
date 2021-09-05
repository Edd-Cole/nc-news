import { useState } from "react";
import { useHistory } from "react-router";
import { editUser } from "../utils";

const UpdateUser = ({currentUser}) => {
    const [editFirstName, setEditFirstName] = useState("");
    const [editLastName, setEditLastName] = useState("");
    const [editAvatar, setEditAvatar] = useState("");
    const redirect = useHistory();

    return (
        <form className="editUserForm" onSubmit={(event) => {
            event.preventDefault();
            editUser(currentUser, editFirstName, editLastName, editAvatar)
            redirect.push(`/users/${currentUser}`)
        }}>
            <br />
            <label for="editFirstName">First Name: </label>
            <input id="editFirstName" type="text" value={editFirstName} onChange={(event) => setEditFirstName(event.target.value)}/>
            <br />
            <label for="editLastName">Last Name: </label>
            <input id="editLastName" type="text" value={editLastName} onChange={(event) => setEditLastName(event.target.value)} />
            <br />
            <label for="editAvatar">Avatar URL: </label>
            <input id="editAvatar" type="text" value={editAvatar} onChange={(event) => setEditAvatar(event.target.value)} />
            <br /><br />
            <input type="submit" value="Edit details"/>
        </form>
    )
}

export default UpdateUser;