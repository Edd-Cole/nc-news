import { useHistory } from "react-router";
import { deleteComment } from "../utils";

const DeleteComment = ({comment_id}) => {
    const redirect = useHistory()
    return (
        <button onClick={() => {
            deleteComment(comment_id)
            redirect.push("/")
        }}>Delete</button>
    )
}

export default DeleteComment;