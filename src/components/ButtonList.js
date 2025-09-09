import React from 'react'
import Button from './Button'
import { list } from '../utils/buttonConstants'

const ButtonList = () => {

  
  return (
    <div className="flex overflow-x-auto">
      {list.map((buttonName, index) => <Button key={index} buttonName={buttonName}/>)}
    </div>
  )
}

export default ButtonList