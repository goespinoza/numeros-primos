const assert = require('chai').assert;
const expect = require('chai').expect;

const Numeros = require('../models/numeros')

describe('Numeros Primos', () => {
  const numeros = new Numeros();

  describe('Basic Testing with assert', () => {
    it('The result is a array', () => {
      const result = numeros.primos(50);
      assert.typeOf(result, 'array');
    })

    it('Numeros Primos ente 2 - 10', () => {
      const result = numeros.primos(10);
      assert.deepEqual(result, [ 2, 3, 5, 7 ]);
    })
  })

  describe('Basic Testing with expect', () => {
    it('The result is a array', () => {
      const result = numeros.primos(50);
      expect(result).to.be.an('array')
    })

    it('Numeros Primos ente 2 - 10', () => {
      const result = numeros.primos(10);
      expect(result).to.deep.equals([ 2, 3, 5, 7 ]);
    })
  })
})