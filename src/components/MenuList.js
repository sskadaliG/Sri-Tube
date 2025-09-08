import React from 'react'

const MenuList =  ({setActive, active, title, list}) => {
// first button is active by default
console.log(active)
  return (
    <div className="border-b">
      {title && <h1 className="px-4 pt-3.5 font-medium">{title}</h1>}
      <div className="flex-col">
        {list.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActive(btn.id)}
            className={`w-full flex gap-5 px-4 py-3.5 text-sm  rounded-lg hover:bg-gray-100
            ${active === btn.id ? "bg-gray-200" : "hover:bg-gray-200"}
          `}
          >
            <span>{btn.icon}</span>
            <span>{btn.label}</span>
          </button>
        ))}
      </div>
    </div>

  );
}

export default MenuList;
