import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Topics = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetch("https://eddncnewsproject.herokuapp.com/api/topics")
        .then(response => response.json())
        .then(topics => setTopics(topics.topics))
    }, [])
    
    return (
        <section>
            <h2>Topics</h2>
            <hr></hr>
            {topics.map(topic => {
                return (
                    <section>
                    <h3><Link to={`/articles?topic=${topic.slug}`}>{topic.slug}</Link></h3>
                    <p>{topic.description}</p>
                    <hr></hr>
                    </section>
                )
            })}
        </section>
    )
}

export default Topics;