export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json({
    message: 'hooray! welcome to our api server!...',
    apis: [
      'daisy',
      'hash',
      'lorem',
      'nid',
      'sfid',
      'sid',
      'slug',
      'uuid',
      'vins',
    ],
  })
}
