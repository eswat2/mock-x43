const { chance, nid } = require('../utils/mocks')

module.exports = (req, res) => {
  const { count } = req.query

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(count ? chance.unique(nid, parseInt(count)) : nid())
}
