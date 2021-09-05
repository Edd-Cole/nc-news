import { Link } from "react-router-dom"

const YourAccount = ({currentUser}) => {
    return (
        <Link to={`/users/${currentUser}`}><button>Your Account</button></Link>
    )
}

export default YourAccount;