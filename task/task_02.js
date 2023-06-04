function filterArray (arr) {
    return arr.filter((el, index) => index % 2 === 0)
}

module.exports = filterArray