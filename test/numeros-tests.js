const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

const Numeros = require('../models/numeros')
const inquirer = require('../helpers/inquirer')

describe('Numeros Primos', () => {
  const numeros = new Numeros();

  describe('Basic Testing with assert', () => {
    it('The result is a array', () => {
      const result = numeros.primos(50);
      assert.typeOf(result, 'array');
    })

    it('The result is equal a [ 2, 3, 5, 7 ]', () => {
      const result = numeros.primos(10);
      assert.deepEqual(result, [ 2, 3, 5, 7 ]);
    })

  })

  /* describe('Basic operation: subtraction with expect', () => {
    it('Subtraction of 2 numbers equals 5', () => {
      const res = operation.subtraction.value;
      expect(res).to.equal(5);
    })

    it('The subtraction of 10 - 5 equals 5 ', () => {
      const res = operation.subtraction.text;
      expect(res).to.equal('La resta de 10 - 5 = 5');
    })

    it('The result is a string', () => {
      const res = operation.subtraction.text;
      expect(res).to.be.a('string');
    })

    it('The result is a number', () => {
      const res = operation.subtraction.value;
      expect(res).to.be.a('number');
    })
  }) */

  /* describe('Basic operation: area of a triangle with should', () => {
    it('Area of triangle with base 10 x height 5 equal 25', () => {
      const area = operation.area.value;
      area.should.equal(25);
    })

    it('Area of triangle equals 25 ', () => {
      const area = operation.area.text;
      area.should.equal('El área del triángulo es 25');
    })

    it('The result is a string', () => {
      const area = operation.area.text;
      area.should.be.a('string');
    })

    it('The result is a number', () => {
      const area = operation.area.value;
      area.should.be.a('number');
    })
  }) */
})