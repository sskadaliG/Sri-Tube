import React from 'react'
import ButtonList from './ButtonList'
import VideoList from './VideoList';
import { list } from '../utils/buttonConstants'


const MainContainer = () => {
  return (
    <div className="pl-4 pr-4 ml-4 mr-4">
      <ButtonList optionsList={list} />
      <div className="h-screen overflow-y-scroll">
        <VideoList />
      </div>

    </div>
  )
}

export default MainContainer