import { Link } from "react-router-dom";

const AddArticle = ({currentUser}) => {
    if(!currentUser) return null;
    return (
        <Link to="/articles/create_new_article"><button>Post Article</button></Link>
    )
}

export default AddArticle;