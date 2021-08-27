const createNew = (arrayOfObjects) => {
    return arrayOfObjects.map(object => {
        return {...object}
    })
}

export {createNew};