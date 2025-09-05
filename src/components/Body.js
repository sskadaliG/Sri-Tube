import React from 'react'
import SideBar from './SideBar'
import VideoList from './VideoList'
import ButtonList from './ButtonList'

const Body = () => {
  return (
    <div>
        <div>
            <SideBar/>
        </div>
        <div>
            <ButtonList/>
            <VideoList/>
        </div>
    </div>
  )
}

export default Body