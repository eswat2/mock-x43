module.exports = (req, res) => {
  res.json({
    message: 'hooray! welcome to our api server!...',
    apis: ['color', 'hash', 'slug', 'uuid'],
  })
}
