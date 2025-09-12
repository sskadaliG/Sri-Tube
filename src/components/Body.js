import SideBar from './SideBar'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Body = () => {
    const menuOpen = useSelector((store) => store.app.isMenuOpen);


    if (menuOpen === null) return;


    return (
        <div className="flex">

            {menuOpen && < SideBar />}
            <Outlet />

        </div>
    )
}

export default Body