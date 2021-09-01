const createNew = (arrayOfObjects) => {
    return arrayOfObjects.map(object => {
        return {...object}
    })
}

const voteArticle = (event, articles, article_id, setArticles, setVote, article) => {
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
    setVote({article_id: article.article_id, value: (event.target.value === "+" ? 1 : -1)})
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

const extractSearchValue =  (search) => {
    const index = search.indexOf("=");
    return search.slice(index + 1)
}

export {createNew, voteArticle, commentVote, extractSearchValue};