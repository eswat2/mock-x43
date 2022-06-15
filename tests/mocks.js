import {
  chance,
  delay,
  nid,
  randomArray,
  sfid,
  sid,
  slug,
  uuid,
  api,
} from '../utils/mocks.js'
import { expect } from 'chai'

const checkArray = (data, count) => {
  it('should return an array', () => {
    expect(data).to.be.a('array')
  })
  it(`should be ${count} items`, () => {
    expect(data.length).to.equal(count)
  })
}

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

describe('mocks', () => {
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
    const count = 10
    const min = 0
    const max = 20
    const data = randomArray(count, max)
    console.log('-- randomArray:', data.toString())
    checkArray(data, count)
    describe('items', () => {
      data.map((item) => {
        checkNumber(item, min, max)
      })
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
})

describe('api', () => {
  const keys = ['hash', 'lorem', 'nid', 'sfid', 'sid', 'slug', 'uuid', 'vins']
  it(`should be an object... ${keys}`, () => {
    expect(api)
      .to.be.a('object')
      .that.contains.all.keys(...keys)
  })
  keys.map((key) => {
    describe(key, () => {
      const counts = [2, 4, 8]
      if (key === 'slug') {
        it('should return a string by default, 3 words', () => {
          const data = api[key]()
          const words = data.split('-').length
          expect(data).to.be.a('string')
          expect(words).to.be.equal(3)
        })
        counts.map((count) => {
          it(`should return a string, ${count} words`, () => {
            const data = api[key](count)
            const words = data.split('-').length
            expect(data).to.be.a('string')
            expect(words).to.be.equal(count)
          })
        })
      } else {
        it('should return a string by default', () => {
          const data = api[key]()
          expect(data).to.be.a('string')
        })
        counts.map((count) => {
          const data = api[key](count)
          it(`should return an array, ${count} items`, () => {
            expect(data).to.be.a('array').that.have.lengthOf(count)
          })
        })
        if (key === 'sfid') {
          counts.map((count) => {
            it(`should return an array, ${count} hex`, () => {
              const data = api[key](count, true)
              expect(data).to.be.a('array').that.have.lengthOf(count)
              data.map((item) => {
                expect(item[0]).to.be.equal('0')
                expect(item[1]).to.be.equal('x')
              })
            })
          })
        }
      }
    })
  })
})
