import React from 'react'
import { Link } from 'react-router-dom';

const MenuList =  ({setActive, active, title, list}) => {
// first button is active by default
  return (
    <Link to="/"><div className="border-b">
      {title && <h1 className="px-4 pt-3.5 font-medium">{title}</h1>}
      <div className="flex-col">
        {list.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActive(btn.id)}
            className={` flex gap-5 px-4 py-3.5 text-sm w-52 h-min whitespace-nowrap rounded-lg hover:bg-gray-100
            ${active === btn.id ? "bg-gray-200 font-bold" : "hover:bg-gray-200"}
          `}
          >
            <span>{btn.icon}</span>
            <span>{btn.label}</span>
          </button>
        ))}
      </div>
    </div></Link>

  );
}

export default MenuList;
