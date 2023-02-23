import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import { useState } from "react";
import { evaluate } from "mathjs";
const numbers = [1,2,3,4,5,6,7,8,9,0]

const rows = [
  [7,8,9],
  [4,5,6],
  [1,2,3],
  [0]
]

const operations = ['+','-','*','/']
const EQUAL_SIGN = '='

const Calculator = () => {
  const [value, setValue] = useState('')
  
  return <section>
    <h1>Calculator</h1>
    <input value={value} readOnly/>
    <div role='grid'>
    {
      rows.map((row,index) => (
        <div key={index} role='row'>
          {row.map(number => <button onClick={()=> setValue(prev => prev.concat(number))} key={number} >{number}</button>)}
        </div>
      ))
    }
    {
      operations.map(operation => 
       <button onClick={()=>{
          setValue(prev => prev.concat(operation))
       }} key={operation}>{operation}</button>)
    }
    <button onClick={()=>{setValue(evaluate(value))}}>{EQUAL_SIGN}</button>
    </div>

  </section>
}

describe('Calculator', () => {
  afterEach(cleanup) // Clean the DOM after each test

  it ('Calculator should be render', () => {
    render(<Calculator/>)
  })

  it('should render title correctly',()=> {
    render(<Calculator/>)
    screen.getByText('Calculator') // If the element is not found, an error will be thrown
  })
  it('should render numbers',()=>{
    render(<Calculator/>)
    numbers.forEach(number =>   {
      screen.getByText(number)
    })
  })

  it('should render 4 rows', () => {
    render(<Calculator/>)
    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(4)
  })

  it('should render operations', () => {
    render(<Calculator/>)
    operations.forEach(operation => {
      screen.getByText(operation)
    })
  })

  it('should render equal sign',()=>{
    render(<Calculator/>)
    screen.getByText('=') // If the element is not found, an error will be thrown
  })

  it('should render an input',()=> {
    render(<Calculator/>)
    screen.getByRole('textbox')
  })

  it('should user input after clicking a number', ()=> {
    render(<Calculator/>)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1')
  })

  it('should user input after clicking several numbers', ()=> {
    render(<Calculator/>)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const three = screen.getByText('3')
    fireEvent.click(three)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('123')
  })

  it('should show user input after clicking numbers and operations', () => {
    render(<Calculator/>)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+1')
  })

  it('should calculate the result', () => {
    render(<Calculator/>)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const equal = screen.getByText('=')
    fireEvent.click(equal)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('2')
  })
})