import { useState } from "react";

const CreateArticle = () => {
    const [newTitle, setNewTitle] = useState
    return (
        <section class="createNewArticle">
            <h2>Create an Article</h2>
            <form className="createArticleForm">
                <label for="newArticleTitle">Title:*</label>
                <input id="newArticleTitle" type="text" value={newTitle} onChange={(event) => setNewTitle(event.target.value)} required />
            </form>
        </section>
    )
}

export default CreateArticle;