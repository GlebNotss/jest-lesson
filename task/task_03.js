function getRandomNum (min, max) {
    const rand = Math.random() * (max - min) + min

    return Math.floor(rand);
}

module.exports = getRandomNum