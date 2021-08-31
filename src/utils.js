const createNew = (arrayOfObjects) => {
    return arrayOfObjects.map(object => {
        return {...object}
    })
}

const voteArticle = (event, articles, article_id, setArticles) => {
    const newArticles = createNew(articles);
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

export {createNew, voteArticle};