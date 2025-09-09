import React from 'react'
import { INITIAL_LOGO, LOGO, MENU_LOGO } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../store/appSlice';

const Header = () => {

    const dispatch = useDispatch();

    const handleOnCLick = () => {
        dispatch(toggleMenu())
    }

    return (
        <div className=" flex justify-between p-4 m-4 drop-shadow-md">
            <div className="flex" onClick={handleOnCLick}>
                <img className="w-8 h-8 hover:cursor-pointer" alt="menu-logo" src={MENU_LOGO} />
                <img className="w-24 pl-4 pb-2" alt="logo" src={LOGO}/>
            </div>
            <div className="grid grid-cols-8 w-1/3 mx-auto rounded-3xl overflow-hidden border border-gray-400">
                <input className="placeholder-gray-600 col-span-7 px-3 py-2 focus:outline-none" type="text" placeholder="Search"></input>
                <button className="bg-gray-200 col-span-1 hover:bg-gray-300 border  border-l-gray-400">🔍</button>
            </div>
            <div className="pr-2">
                <img className="w-10 rounded-3xl mr-4" alt="initial-logo" src={INITIAL_LOGO} />
            </div>
        </div>
    )
}

export default Header