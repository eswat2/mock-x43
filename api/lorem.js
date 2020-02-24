const { lorem } = require('../utils/lorem')
const { randomArray } = require('../utils/mocks')

module.exports = (req, res) => {
  const { count } = req.query
  const num = count ? parseInt(count) : 1
  const indx = randomArray(num, lorem.length - 1)

  res.json(indx.map(i => lorem[i]))
}
