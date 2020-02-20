module.exports = (req, res) => {
  res.json({
    message: "hooray! welcome to our api server!...",
    apis: ["hash", "slug", "uuid"]
  })
}
