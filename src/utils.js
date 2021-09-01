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
    // setVote({article_id: article.article_id, value: (event.target.value === "+" ? 1 : -1)})
    setArticles(newArticles)
}

export {createNew, voteArticle};