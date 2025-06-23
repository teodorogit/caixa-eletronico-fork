
import assert from 'node:assert'
import { it } from 'node:test'
import notasASeremSacadas from './index.js';

it('Testing when input value its zero', () => {
  const inputZero = notasASeremSacadas(0)
  assert.deepEqual(inputZero, [])
})

it('Testing with input 100, expecting 1 note 100', () => {
  const valueExpect = notasASeremSacadas(100)
  assert.deepEqual(valueExpect,[100])
})

it('Testing with negative value', () => {
  const valueExpect = notasASeremSacadas(-1)
 assert.deepEqual(valueExpect,[])
})

it('Testing with zero', () => {
  const valueExpect = notasASeremSacadas(0)
 assert.deepEqual(valueExpect,[])
})

it('Testing, edge value', () => {
  const valueExpect = notasASeremSacadas(1000)
  let valueToCompare = Array(10).fill(100)
  assert.deepEqual(valueExpect, valueToCompare)
})