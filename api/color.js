const { chance, colors } = require('../utils/mocks')

const randomColor = () => {
  return chance.pickone(colors)
}

module.exports = (req, res) => {
  const { count } = req.query

  res.json(count ? chance.unique(randomColor, parseInt(count)) : randomColor())
}
