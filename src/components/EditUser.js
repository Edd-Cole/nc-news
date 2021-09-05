import { Link } from "react-router-dom";

const EditUser = ({currentUser}) => {
    return (
        <Link to={`/users/${currentUser}/edit`}><button>Edit</button></Link>
    )
}

export default EditUser;