import { chance, delay, nid, randomArray, sfid, sid, slug, uuid } from '../utils/mocks.js'
import { expect } from 'chai'

const checkNumber = (data, min, max) => {
  it('should return a number', () => {
    expect(data).to.be.a('number')
  })
  it(`should be between ${min}-${max}`, () => {
    expect(data).to.be.gte(min)
    expect(data).to.be.lte(max)
  })
}

const checkString = (data, limit) => {
  it('should return a string', () => {
    expect(data).to.be.a('string')
  })
  it(`should be ${limit} chars`, () => {
    expect(data.length).to.equal(limit)
  })
}

describe('chance.hash', () => {
  const data = chance.hash()
  const limit = 40
  console.log('-- hash:', data)
  checkString(data, limit)
})

describe('delay', () => {
  const data = delay()
  const min = 500
  const max = 3500
  console.log('-- delay:', data)
  checkNumber(data, min, max)
})

describe('nid', () => {
  const data = nid()
  const limit = 21
  console.log('-- nid:', data)
  checkString(data, limit)
})

describe('randomArray', () => {
  const count = 10;
  const min = 0;
  const max = 20;
  const data = randomArray(count, max)
  console.log('-- randomArray:', data.toString())
  it('should return an array', () => {
    expect(data).to.be.a('array')
  })
  it(`should be ${count} items`, () => {
    expect(data.length).to.equal(count)
  })
  data.map(item => {
    checkNumber(item, min, max)
  })
})

describe('sfid', () => {
  const data = sfid()
  const limit = 19
  console.log('-- sfid:', data)
  checkString(data, limit)
})

describe('sfid.hex', () => {
  const data = sfid(true)
  const limit = 18
  console.log('-- sfid.hex:', data)
  checkString(data, limit)
})

describe('sid', () => {
  const data = sid()
  const limit = 9
  console.log('-- sid:', data)
  checkString(data, limit)
})

describe('slug', () => {
  const data = slug()
  const limit = 17
  console.log('-- slug:', data)
  checkString(data, limit)
})

describe('uuid', () => {
  const data = uuid()
  const limit = 36
  console.log('-- uuid:', data)
  checkString(data, limit)
})
