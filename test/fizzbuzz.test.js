import { describe, expect, it } from 'vitest'

import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  // como este test no es necesario, lo comentamos ya que esta cubierto con los demas tests
  // it('should be a function', () => {
  //   expect(typeof fizzbuzz).toBe('function')
  // })

  it('should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw a specific error if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow('parameter provided must be a number')
  })

  it('should throw a specific error message if not a number(NAN) is provided as parameter', () => {
    expect(() => fizzbuzz(NaN)).toThrow('parameter provided must be a number')
  })

  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return Fizz if number is multiple of 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz')
    expect(fizzbuzz(6)).toBe('Fizz')
    expect(fizzbuzz(9)).toBe('Fizz')
    expect(fizzbuzz(12)).toBe('Fizz')
  })

  it('should return Buzz if number is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz')
    expect(fizzbuzz(10)).toBe('Buzz')
    expect(fizzbuzz(20)).toBe('Buzz')
    expect(fizzbuzz(25)).toBe('Buzz')
  })

  it('should return FizzBuzz if number is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz')
    expect(fizzbuzz(30)).toBe('FizzBuzz')
    expect(fizzbuzz(45)).toBe('FizzBuzz')
    expect(fizzbuzz(60)).toBe('FizzBuzz')
  })
})
