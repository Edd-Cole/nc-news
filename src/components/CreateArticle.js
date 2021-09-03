import { useState } from "react";
import { useHistory } from "react-router";
import {postNewArticle} from "../utils"

const CreateArticle = ({currentUser}) => {
    const [newTitle, setNewTitle] = useState("")
    const [newArticleTopic, setNewArticleTopic] = useState("")
    const [newBody, setNewBody] = useState("")
    const redirect = useHistory()

    return (
        <section class="createNewArticle">
            <h2 id="createArticleFormTitle">Create an Article</h2>
            <form className="createArticleForm"  onSubmit={(event) => {
            event.preventDefault();
            postNewArticle(newTitle, newBody, newArticleTopic, currentUser)
            .then(article => {
                console.log(article)
                if(article.code === 400) {
                    document.getElementById("createArticleFormTitle").innerHTML = "Error: Article not submitted. Please check that each box is filled in and the current topic exists."
                } else {
                redirect.push(`/articles/${article.articles[0].article_id}`)
                }
            })
        }}>
                <label for="newArticleTitle">Title:*</label>
                <input id="newArticleTitle" type="text" value={newTitle} onChange={(event) => setNewTitle(event.target.value)} maxlength="127" required />
                <br />
                <label for="newArticleTopic">Topic:*</label>
                <input id="newArticleTopic" type="text" value={newArticleTopic} onChange={(event) => setNewArticleTopic(event.target.value)} required />
                <br />
                <label for="newArticleBody">Body:*</label>
                <br />
                <textarea id="newArticleBody" rows="20" cols="40" value={newBody} onChange={(event) => setNewBody(event.target.value)} maxlength="2047" required />
                <br />
                <input id="postNewArticleButton" type="submit" value="Post Article" />
            </form>
        </section>
    )
}

export default CreateArticle;