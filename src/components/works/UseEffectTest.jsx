import React, { useEffect, useState } from 'react'

const UseEffectTest = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1 === 101 ? 100 : count + 1)
    }, 1500)
  }, [count])
  return (
    <div className='pt-5 pb-3 d-flex flex-column justify-content-center align-items-center'>
      <h2 className='text-center fw-bold text-uppercase text-dark'>Use Effect test</h2>
      <p className='text-center fs-2 text-danger'>
        {count}
      </p>
    </div>
  )
}

export default UseEffectTest
