const { chance, sfid } = require('../utils/mocks')

module.exports = (req, res) => {
  const { count, hex } = req.query
  const flake = () => sfid(hex === 'true')

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(count ? chance.unique(flake, parseInt(count)) : flake())
}
