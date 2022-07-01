import { expect } from 'chai'
import { daisy } from '../utils/daisy.js'

const checkArray = (data, count) => {
  it('should return an array', () => {
    expect(data).to.be.a('array')
  })
  if (count) {
    it(`should have ${count} items`, () => {
      expect(data.length).to.equal(count)
    })
  }
}

const checkNumber = (data, min, max) => {
  it('should return a number', () => {
    expect(data).to.be.a('number')
  })
  if (min !== max) {
    it(`should be between ${min}-${max}`, () => {
      expect(data).to.be.gte(min)
      expect(data).to.be.lte(max)
    })
  }
}

const checkString = (data, limit) => {
  it('should be a string', () => {
    expect(data).to.be.a('string')
  })
  if (limit) {
    it(`should be ${limit} chars`, () => {
      expect(data.length).to.equal(limit)
    })
  }
}

const checkObject = (data, keys) => {
  it(`should be an object... ${keys}`, () => {
    expect(data)
      .to.be.a('object')
      .that.contains.all.keys(...keys)
  })
}

describe('daisy', () => {
  const keys = ['dealers', 'names']
  const { dealers, names } = daisy

  checkObject(daisy, keys)

  describe('names', () => {
    const limit = 9
    checkArray(names, limit)

    describe('items', () => {
      names.map((item) => {
        checkString(item)
      })
    })
  })

  describe('dealers', () => {
    it('should be a function', () => {
      expect(dealers).to.be.a('function')
    })

    describe('data', () => {
      const keys = ['id', 'name', 'people', 'stats']
      const numi = names.length
      const data = dealers()
      it(`should be an array of ${numi} items`, () => {
        checkArray(data, numi)
      })
      describe('items', () => {
        data.map((item) => {
          checkObject(item, keys)
          const { id, name, people, stats } = item
          describe('id', () => {
            checkString(id)
          })
          describe('name', () => {
            checkString(name)
          })
          describe('people', () => {
            checkArray(people)
          })
          describe('stats', () => {
            checkObject(stats, ['downloads', 'progress', 'registers', 'users'])
          })
        })
      })
    })
  })
})
