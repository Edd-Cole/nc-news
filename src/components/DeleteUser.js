import { useHistory } from "react-router"
import {deleteUser} from "../utils"

const DeleteUser = ({user}) => {
    const redirect = useHistory()

    console.log(user.username)
    return(
        <button onClick={() => {
            deleteUser(user.username);
            redirect.push("/")
        }}>Delete User</button>
    )
}

export default DeleteUser;