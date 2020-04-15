const { slug } = require('../utils/mocks')

module.exports = (req, res) => {
  const { count } = req.query

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(slug(count))
}
