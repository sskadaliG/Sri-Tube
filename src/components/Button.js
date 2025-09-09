import React from 'react'

const Button = ({buttonName}) => {
  return (
    <div className="px-3 py-2 m-2 w-max h-min bg-gray-100 font-bold text-sm rounded-lg whitespace-nowrap hover:cursor-pointer hover:bg-black hover:text-white">{buttonName}</div>
  )
}

export default Button