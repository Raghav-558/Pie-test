import React from 'react'
import { CARDS_LIST } from '../../utils/helper'
import { useSearchParams } from 'react-router-dom'

const Cards = () => {
  const [, setSearchParams] = useSearchParams()

  const handleClick = search => {
    setSearchParams({ search: search.toLowerCase().replace(/\s/g, '-') })
  }

  return (
    <div className='d-flex align-items-center justify-content-center pt-4 pb-5'>
      <div className='container-xl'>
        <div className='d-flex gap-5 flex-wrap align-items-center justify-content-center'>
          {CARDS_LIST.map((obj, i) => (
            <div
              key={i}
              className='card custom-card d-flex flex-col justify-content-center align-items-center'
            >
              <h2 className='text-center fw-bold text-dark'>{obj.title}</h2> 
              <button
                onClick={() => handleClick(obj.description)}
                className='btn btn-success'
              >
                Click Here
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards
