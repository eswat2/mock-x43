import { chance } from '../utils/mocks.js'

export default (req, res) => {
  const { count } = req.query

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(count ? chance.unique(chance.hash, parseInt(count)) : chance.hash())
}
