import React from 'react'
import { BotMessageSquare, Sun } from 'lucide-react';

const Navbar = () => {
    return (
        <>
            <div className='nav flex items-center justify-between px-[150px] h-[70px] bg-zinc-800'>
                <div className="logo flex items-center">
                    <BotMessageSquare size={40} color='oklch(55.1% 0.027 264.364)' />
                    <span className='text-white text-2xl font-bold ml-2'>CodeRaider</span>
                </div>
                <div className="icons flex items-center gap-5">
                    {/* bg-gray-500 is the normal state, hover:bg-gray-700 is the hover state */}
                    <button className="p-4 hover:bg-zinc-700 text-white font-bold rounded transition duration-150 ease-in-out">
                        <Sun />
                    </button>
                </div>


            </div>
        </>
    )
}

export default Navbar