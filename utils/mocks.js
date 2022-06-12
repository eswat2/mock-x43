import Chance from 'chance'
import { nanoid } from 'nanoid'
import shortid from 'shortid'
import intformat from 'biguint-format'
import FlakeId from 'flake-idgen'

const chance = new Chance()
const idGen = new FlakeId()

const delay = () => {
  return chance.integer({ min: 500, max: 3500 })
}

const randomArray = (length, max) =>
  Array(length)
    .fill()
    .map(() => Math.round(Math.random() * max))

// Note:  Snow Flake ID generator...
const sfid = (hex) => {
  const id = idGen.next()
  return hex ? intformat(id, 'hex', { prefix: '0x' }) : intformat(id, 'dec')
}

// Note:  Nano ID generator...
const nid = () => nanoid()

// Note:  Short ID generator...
const sid = () => shortid.generate()

const slug = (count = 3) => {
  return chance.unique(chance.word, count, { length: 5 }).join('-')
}

function uuid(a) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid)
}

export {
  chance,
  delay,
  randomArray,
  nid,
  sfid,
  sid,
  slug,
  uuid,
}
