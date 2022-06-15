import { api } from '../utils/mocks.js'

export default (req, res) => {
  const { count, hex } = req.query

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(api.sfid(count, hex))
}
