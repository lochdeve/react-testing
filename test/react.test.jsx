import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";

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
  return <section>
    <h1>Calculator</h1>
    <input></input>
    <div role='grid'>
    {
      rows.map((row,index) => (
        <div key={index} role='row'>
          {row.map(number => <span key={number} >{number}</span>)}
        </div>
      ))
    }
    {
      operations.map(operation => 
       <span key={operation}>{operation}</span>)
    }
    <span>{EQUAL_SIGN}</span>
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
})