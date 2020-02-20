const Chance = require("chance")
const { lorem } = require("./lorem")

const chance = new Chance()

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "mint green",
  "teal",
  "white",
  "black",
  "orange",
  "pink",
  "grey",
  "maroon",
  "violet",
  "turquoise",
  "tan",
  "sky blue",
  "salmon",
  "plum",
  "orchid",
  "olive",
  "magenta",
  "lime",
  "ivory",
  "indigo",
  "gold",
  "fuchsia",
  "cyan",
  "azure",
  "lavender",
  "silver"
]

const delay = () => {
  return chance.integer({ min: 500, max: 3500 })
}

const lipsum = () => chance.pickone(lorem)

const slug = (count = 3) => {
  return chance.unique(lipsum, count).join("-")
}

function uuid(a) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid)
}

module.exports = {
  chance,
  delay,
  colors,
  lipsum,
  slug,
  uuid
}
