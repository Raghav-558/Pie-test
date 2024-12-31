import React, { useState } from 'react'

const UseStateTest = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }
  
  return (
    <div className='d-flex flex-column justify-content-center align-items-center pt-3 pb-3'>
      <h2 className='text-center fw-bold text-uppercase'>Counter</h2>
      <p className='text-center fs-2 text-danger'>{count}</p>
      <div className='d-flex align-items-center gap-3 mt-2'>
        <button className='btn btn-outline-success btn-lg'onClick={handleIncrement}>
          Increment
        </button>
        <button className='btn btn-outline-danger btn-lg' onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  )
}
export default UseStateTest
