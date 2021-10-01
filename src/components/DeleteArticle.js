import { useHistory } from "react-router";
import { deleteArticle } from "../utils";

const DeleteArticle = ({ article_id }) => {
    console.log(article_id)
    const redirect = useHistory();
    return(
        <button onClick={() => {
            deleteArticle(article_id);
            redirect.push("/")
        }}>Delete</button>
    )
}

export default DeleteArticle;