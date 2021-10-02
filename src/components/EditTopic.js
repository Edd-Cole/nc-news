import { Link } from "react-router-dom";

const EditTopic = ({ slug }) => {
    return (
        <section>
           <Link to={`/topics/${slug}/edit`}>Edit</Link>
        </section>
    )
}

export default EditTopic;