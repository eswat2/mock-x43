import { daisy } from '../utils/daisy.js'

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const dealers = daisy.dealers()

  res.json({ dealers })
}
