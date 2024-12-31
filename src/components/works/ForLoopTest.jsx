import React, { useState, useEffect } from 'react'

const ForLoopTest = () => {
  const [count, setCount] = useState(9)

  useEffect(() => {
    for (let i = 9; i >= 0; i--) {
      setTimeout(() => {
        setCount(i)
      }, (9 - i) * 1500)
    }
  }, [])
  return (
    <div className='pt-5 pb-3'>
      <h2 className='text-center fw-bold text-uppercase text-dark'>For Loop Test </h2>
      <p className='text-center fs-2 text-danger'>{count}</p>
    </div>
  )
}

export default ForLoopTest
