import { useState } from "react"
import { useHistory } from "react-router";
import { postNewUser } from "../utils";

const CreateAccount = ({setCurrentUser}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [avatarURL, setAvatarURL] = useState("");
    const history = useHistory()
    const redirectSuccess = () => history.push("/users/create_account_success")

    return (
        <section>
            <br></br>
            <h3 id="createAccountFailureMessage"></h3>
            <form className="createNewUserForm" onSubmit={(event) => {
                event.preventDefault()
                postNewUser(firstName, lastName, username, email, avatarURL)
                .then((error) => {
                    console.log(error)
                    if(error.code === 400) {
                        document.getElementById("createAccountFailureMessage").innerHTML = "Sorry, that username is already taken..."
                    } else {
                        setCurrentUser(username)
                        redirectSuccess()
                    }
                })}}>
                <label for="firstName">First Name:* </label>
                <input id="firstName" className="createNewUserInput" type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="John" required />
                <br />
                <label for="lastName">Last Name:* </label>
                <input id="lastName" className="createNewUserInput" type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="Smith" required />
                <br />
                <label for="userName">Username:* </label>
                <input id="userName" className="createNewUserInput" type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="SadBalloon&amp;YodellingPickle" required />
                <br />
                <label for="userEmail">Email:* </label>
                <input id="userEmail" className="createNewUserInput" type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="AlexJones@gmail.com" pattern="^.+@\w+(\.\w+){1,2}$" required />
                <br />
                <label for="avatar_url">Avatar Link: </label>
                <input id="avatar_url" className="createNewUserInput" type="text" value={avatarURL} onChange={(event) => setAvatarURL(event.target.value)} placeholder="https://cdn.shopify.com/s/files/1/0737/9291/products/sad_balloon_pin_white_sml.jpg?v=1497229431" />
                <br />
                <input type="submit" className="createNewUserButton" value="Create Account" />
            </form>
        </section>
    )
}

export default CreateAccount;