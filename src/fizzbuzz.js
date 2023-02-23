/*
Escribir una funcion que al pasarle un numero devuelva:
- Fizz si el numero es multiplo de 3
- Buzz si el numero es multiplo de 5
- FizzBuzz si el numero es multiplo de 3 y 5
- El numero si no es multiplo de 3 ni de 5
*/

export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('parameter provided must be a number')
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number')

  const multiplies = {
    3: 'Fizz',
    5: 'Buzz'
  }
  let output = ''

  Object.entries(multiplies).forEach(([key, word]) => {
    if (number % key === 0) output += word
  })

  return output === '' ? number : output
}
