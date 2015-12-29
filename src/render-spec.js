const la = require('lazy-ass')
const is = require('check-more-types')
/* global describe, it */
describe('render', () => {
  const render = require('./render')
  it('is a function', () => {
    la(is.fn(render))
  })

  it('renders todos')
})
