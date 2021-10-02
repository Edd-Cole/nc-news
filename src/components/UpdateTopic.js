import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { editTopic } from "../utils";

const UpdateTopic = () => {
    const [description, setDescription] = useState("");
    const { slug } = useParams();

    useEffect(() => {
        fetch(`https://eddncnewsproject.herokuapp.com/api/topics/${slug}`)
        .then(response => {
            return response.json()
        })
        .then(({ topic }) => {
            console.log(topic)
            return setDescription(topic.description);       
        })
    }, [])

    return (
        <section>
            <h2>Edit your topic</h2>
            <form onSubmit={() => editTopic(slug, description)}>
                <label htmlFor="editTopicDescription" />
                <textarea id="editTopicDescription" rows="20" cols="40" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                <br /><br />
                <button type="submit">Edit</button>
            </form>
        </section>
    )
}

export default UpdateTopic;