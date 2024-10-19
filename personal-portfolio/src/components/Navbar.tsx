import { useState } from "react";

function Navbar() {
    const [isToggled, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!isToggled);
        console.log(isToggled);
    }

    return (
        <>
            <nav className="flex items-center justify-between bg-black flex-wrap m-auto p-12">
                <div className="ml-8 text-2xl lg:text-4xl text-white font-thin font-serif pointer-events-none">
                    <span>Elisha Lucile Ong</span>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
                        onClick={handleClick}
                    >
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-xl lg:text-xl lg:flex-grow flex justify-end font-extralight font-sans">
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
            <div className="w-full lg:hidden">
                {isToggled ?
                    <div className="w-1/2 absolute h-screen flex flex-col text-end right-0 text-2xl font-sans font-extralight bg-black ml-auto">
                        <a href="#about" className="m-4 pr-4 hover:font-medium hover:text-2xl transition-all">
                            About
                        </a>
                        <a href="#projects" className="m-4 pr-4 hover:font-medium hover:text-2xl transition-all">
                            Projects
                        </a>
                        <a href="#resume" className="m-4 pr-4 hover:font-medium hover:text-2xl transition-all">
                            Résumé
                        </a>
                        <a href="#contact" className="m-4 pr-4 hover:font-medium hover:text-2xl transition-all">
                            Contact
                        </a>
                    </div>
                    :
                    <div></div>
                }
            </div>
        </>
    )
}

export default Navbar