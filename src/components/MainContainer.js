import React from 'react'
import ButtonList from './ButtonList'
import VideoList from './VideoList'

const MainContainer = () => {
  return (
    <div className="col-span-7 pl-4 pr-4 ml-4 mr-4">
        <ButtonList/>
        <VideoList/>
    </div>
  )
}

export default MainContainer