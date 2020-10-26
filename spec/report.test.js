const report = require('../src/report')

describe('#Report', () => {
  test('It returns a string as an output', () => {
    expect(typeof report("Green")).toBe("string")
  })
})