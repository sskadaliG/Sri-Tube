import React from 'react'
import Button from './Button'

const ButtonList = ({optionsList}) => {

  
  return (
    <div className="flex overflow-x-auto">
      {optionsList.map((buttonName, index) => <Button key={index} buttonName={buttonName}/>)}
    </div>
  )
}

export default ButtonList