import React, { useEffect } from 'react'

const UseEffectComponent = () => {
    useEffect(() => {
    console.log('UseEffectComponent mounted')
    }, []);
  return (
    <div>
      <h6>UseEffect Component</h6>
    </div>
  )
}

export default UseEffectComponent
//useEffect is used when we want to perform some action when the component is mounted, updated or unmounted.
//first argument is a function that will be executed when the component is mounted, updated or unmounted.
//second argument is an array of dependencies. If the dependencies change, the function will be executed. empty array means the function will only be executed when the component is mounted.
