import React from 'react'


const Header = (props) => {
  return (
    <div>
      <h1 className='heading'>{props.title}</h1>

    </div>
  )
}

export default Header
//component lifecycle: constructed, mounted, updated, unmounted

//useState hook: allows you to add state to functional components; returns an array with two elements: the current state value and a function that lets you update it; state of a component is a variable that holds some info that may change over the lifetime of the component
//component state is in local scope, so it's not accessible outside of the component
//every comonent has its own state
//when value of state changes, component re-renders itself with updated values