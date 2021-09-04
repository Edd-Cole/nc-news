import { useState } from "react";
import { useHistory } from "react-router";
import { postNewTopic } from "../utils";

const CreateTopic = ({currentUser}) => {
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const topicArticles = useHistory();

    return (
        <section>
            <h3 id="newTopicError"></h3>
            <form id="newTopicForm" onSubmit={ (event) => { 
                event.preventDefault()
                postNewTopic(slug, description)
                .then(topics => {
                    console.log(topics)
                    if(topics.status === 400) {
                        document.getElementById("newTopicError").innerHTML = `This Topic has already been created.`
                    } else {
                        topicArticles.push(`/?topic=${slug}`)
                    }
                })
            }}>
                <label for="newTopicSlug">Topic Title:*</label>
                <input id="newTopicSlug" type="text" value={slug} onChange={(event) => setSlug(event.target.value)} required />
                <br />
                <label for="newTopicDescription">Topic Description:*</label>
                <input id="newTopicDescription" type="text" value={description} onChange={(event) => setDescription(event.target.value)} required />
                <br />
                <input id="newTopicSubmit" type="submit" value="Create Topic"/>
            </form>
        </section>
    )
}

export default CreateTopic;