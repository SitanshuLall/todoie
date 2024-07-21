import React from 'react'
import {useState} from 'react'

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count is {count}</p>
      <h6>value is {count%2 === 0 ? 'Even' : 'Odd'}</h6>

      <button className='button' onClick={() => setCount(count + 1)}>Increment</button>
      <button className='button' onClick={() => setCount(count - 1)}>Decrement</button>
      <button className='button'>Add Todo</button>
    </div>
  )
}

export default Button

//component lifecycle: constructed, mounted, updated, unmounted

//useState hook: allows you to add state to functional components; returns an array with two elements: the current state value and a function that lets you update it; state of a component is a variable that holds some info that may change over the lifetime of the component
//component state is in local scope, so it's not accessible outside of the component
//every comonent has its own state
//when value of state changes, component re-renders itself with updated values
//return two values: current state value and a function that lets you update it
