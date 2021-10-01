const createNew = (arrayOfObjects) => {
    return arrayOfObjects.map(object => {
        return {...object}
    })
}

const voteArticle = async(event, articles, article_id, setArticles, setVote, article) => {
    setVote({article_id: article.article_id, value: (event.target.value === "+" ? 1 : -1)})
    let newArticles = createNew(articles);
    if(event.target.value === "+") {
        newArticles.map(article => {
            if(article_id === article.article_id) {
                article.votes++;
                return article;
            }
            return article;
        })
    } else if (event.target.value === "-") {
        newArticles.map(article => {
            if(article_id === article.article_id) {
                article.votes--;
                return article;
            }
            return article;
        })
    }
    setArticles(newArticles)
}

const commentVote = (comment_id, value, comments, setComments) => {
    const newComments = createNew(comments)
    if(value === "+") {
    newComments.map(comment => {
        if(comment.comment_id === comment_id) {
            comment.votes += 1;
        }
        return comment
    })
    } else if (value === "-") {
        newComments.map(comment => {
            if(comment.comment_id === comment_id) {
                comment.votes -= 1;
            }
            return comment;
        })
    }
    setComments(newComments)
}

const extractSearchValue = (search) => {
    const index = search.indexOf("=");
    return search.slice(index + 1)
}

const postNewUser = (firstName, lastName, username, email, avatarURL) => {
    return fetch("https://eddncnewsproject.herokuapp.com/api/users", {
        method: "POST",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({name: `${firstName} ${lastName}`, username, email, avatar_url: avatarURL})
      }).then((response) => response.json())
}

const postNewTopic = (slug, description) => {
    return fetch("https://eddncnewsproject.herokuapp.com/api/topics", {
        method: "POST",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({slug, description})
    })
}

const postNewArticle = (title, body, topic, author) => {
    return fetch("https://eddncnewsproject.herokuapp.com/api/articles", {
        method: "POST",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({title, body, topic, author})
    })
    .then(response => response.json())
}

const postNewComment = (author, article_id, body) => {
    return fetch(`https://eddncnewsproject.herokuapp.com/api/articles/${article_id}/comments`, {
        method: "POST",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({author, article_id, body})
    })
    .then(response => response.json())
}

const editComment = (comment_id, currentComment) => {
    console.log(typeof(comment_id), currentComment)
    comment_id = parseInt(comment_id);
    return fetch(`https://eddncnewsproject.herokuapp.com/api/comments/${comment_id}`, {
        method: "PATCH",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({body: currentComment})
    }).then(response => response.json())
}

const editUser = (username, firstName, lastName, avatar_url) => {
    fetch(`https://eddncnewsproject.herokuapp.com/api/users/${username}`, {
        method: "PATCH",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({firstName, lastName, avatar_url})
    })
    .then(response => response.json())
    .then(response => console.log(response))
}

const deleteUser = (username) => {
    fetch(`https://eddncnewsproject.herokuapp.com/api/users/${username}`,{
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify()
    })
    .then(response => response.json())
}

const deleteComment = (comment_id) => {
    return fetch(`https://eddncnewsproject.herokuapp.com/api/comments/${comment_id}`,{
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify()
    })
    .then(response => response.json()) 
}

const deleteArticle = (article_id) => {
    console.log("running delete article")
    return fetch(`https://eddncnewsproject.herokuapp.com/api/articles/${article_id}`, {
        method: "DELETE",
        mode: "cors",
        cahce: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify()
    })
    .then(response => response.json())
}

export {createNew, voteArticle, commentVote, extractSearchValue, postNewUser, postNewTopic, postNewArticle, postNewComment, editComment, editUser, deleteUser, deleteComment, deleteArticle};