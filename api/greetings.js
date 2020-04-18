module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json({
    message: 'hooray! welcome to our api server!...',
    apis: ['hash', 'lorem', 'shortId', 'slug', 'uuid'],
  })
}
