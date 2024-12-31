import React from 'react'
import UseEffectTest from '../works/UseEffectTest'
import UseStateTest from '../works/UseStateTest'
import ForLoopTest from '../works/ForLoopTest'
import Cards from '../works/Cards'

const Test = () => {
  return (
      <div>
          <UseEffectTest />
          <UseStateTest />
          <ForLoopTest />
          <Cards/>
      </div>
  )
}

export default Test