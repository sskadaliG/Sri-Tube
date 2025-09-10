import React, { useEffect, useState } from 'react'
import { INITIAL_LOGO, LOGO, MENU_LOGO, YOUTUBE_SEARCH_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../store/appSlice';
import { Link, Outlet } from 'react-router-dom';
import { addCacheResults } from '../store/searchSlice';

const Header = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const cache = useSelector(store => store.search)

    const dispatch = useDispatch();

    const handleOnCLick = () => {
        dispatch(toggleMenu())
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if(cache[searchQuery]){
                setShowSuggestions(cache[searchQuery])
            } else {
            getSearchSuggestions()}}, 200);
        return () => { clearTimeout(timer); };
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSearchSuggestions(json[1]);
        dispatch(addCacheResults({[searchQuery]: json[1]}));
    }



    return (
        <div>
            <div className=" flex justify-between p-4 mx-4 drop-shadow-md">
            <div className="flex">
                <img  onClick={handleOnCLick}className="w-8 h-8 hover:cursor-pointer" alt="menu-logo" src={MENU_LOGO} />
                <Link to="/"><img className="w-24 pl-4 pb-2" alt="logo" src={LOGO} /></Link>
            </div>

            <div className=" w-1/3 mx-auto ">
                <div className="grid grid-cols-8 rounded-3xl overflow-hidden border border-gray-400">
                    <input className="placeholder-gray-600 col-span-7 px-3 py-2 focus:outline-none"
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}></input>
                    <button className="bg-gray-200 col-span-1 hover:bg-gray-300 border  border-l-gray-400">🔍</button></div>
                {searchQuery && searchSuggestions && showSuggestions &&
                    <div className="pt-1">
                        <ul className="fixed bg-white p-2 rounded-xl w-[540px] border border-gray-200">
                            {searchSuggestions.map((s) => <li className="p-3 font-bold  hover:bg-gray-100 rounded-lg" key={s}>🔍 {s}</li>)}
                        </ul>
                    </div>}
            </div>
            <div>
            </div>
            <div className="pr-2">
                <img className="w-10 rounded-3xl mr-4" alt="initial-logo" src={INITIAL_LOGO} />
            </div>
        </div>
        <Outlet/></div>
        
    )
}

export default Header