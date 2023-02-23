import { describe, it, expect } from 'vitest'

const canReconfigure = (from, to) => {
  if (typeof from !== 'string') { throw new Error('first parameter must be a string') }
  if (typeof to !== 'string') { throw new Error('second parameter must be a string') }
  const isSameLength = from.length === to.length
  if (!isSameLength) { return false }

  const hasSameLetters = new Set(from).size === new Set(to).size
  if (!hasSameLetters) return false

  const transformations = {}
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]
    const storedLetter = transformations[fromLetter]
    if (storedLetter && storedLetter !== toLetter) return false
    transformations[fromLetter] = toLetter
  }
  return true
}

describe('can configure', () => {
  it('should be a function', () => {
    expect(canReconfigure).toBeTypeOf('function')
  })

  it('should throw if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow()
  })

  it('should throw if first parameter is not a string', () => {
    expect(() => canReconfigure(1)).toThrow()
  })

  it('should throw if second parameter is not a string', () => {
    expect(() => canReconfigure('a', 1)).toThrow()
  })

  it('should return a boolean', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
  })
  it('should return false if strings have different length', () => {
    expect(canReconfigure('a', 'ab')).toBe(false)
  }
  )

  it('should return false if strings have different number of unique letters', () => {
    expect(canReconfigure('abx', 'abb')).toBe(false)
  })

  it('should return false if strings  has different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})
