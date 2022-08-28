const ObjectId = require('mongoose').Types.ObjectId
const emailValid = (value) => {
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    return regex.test(value)
}

const objectIdIsValid = (value) => {
    return ObjectId.isValid(value)
}

module.exports = {
    emailValid,
    objectIdIsValid
}