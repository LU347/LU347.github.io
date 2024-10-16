import React from 'react';

function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-black m-auto p-6">
            <div className="text-xl lg:text-3xl text-white font-medium font-serif pointer-events-none">
                <span>Elisha Lucile Ong</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-md lg:text-xl lg:flex-grow flex justify-end font-extralight font-sans">
                    <a href="#about" className="m-4 hover:font-medium hover:text-2xl transition-all">
                        About
                    </a>
                    <a href="#projects" className="m-4 hover:font-medium hover:text-2xl transition-all">
                        Projects
                    </a>
                    <a href="#resume" className="m-4 hover:font-medium hover:text-2xl transition-all">
                        Résumé
                    </a>
                    <a href="#contact" className="m-4 hover:font-medium hover:text-2xl transition-all">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar