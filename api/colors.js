const { chance, colors } = require('../utils/mocks')

module.exports = (req, res) => {
  const { count } = req.query

  res.json(chance.pickset(colors, count ? parseInt(count) : 1))
}
