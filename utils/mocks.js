const Chance = require('chance')
const { lorem } = require('./lorem')

const chance = new Chance()

const delay = () => {
  return chance.integer({ min: 500, max: 3500 })
}

const lipsum = () => chance.pickone(lorem)

const randomArray = (length, max) =>
  Array(length)
    .fill()
    .map(() => Math.round(Math.random() * max))

const slug = (count = 3) => {
  return chance.unique(lipsum, count).join('-')
}

function uuid(a) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid)
}

module.exports = {
  chance,
  delay,
  randomArray,
  lipsum,
  slug,
  uuid,
}
