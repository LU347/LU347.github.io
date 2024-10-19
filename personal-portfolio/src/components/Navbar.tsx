import { useState } from "react";

import Resume from "../docs/Resume.pdf";
import Icon from "../../public/among-us.svg";

function Navbar() {
    const [isToggled, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!isToggled);
        console.log(isToggled);
    }

    return (
        <>
            <nav className="absolute w-full z-10 flex items-center justify-end lg:justify-center flex-wrap p-12">
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
                        onClick={handleClick}
                    >
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-xl lg:flex-grow flex justify-center font-extralight font-sans">
                        <a href="#about" className="m-4 hover:font-medium hover:text-2xl transition-all">
                            About
                        </a>
                        <a href="#projects" className="m-4 hover:font-medium hover:text-2xl transition-all">
                            Projects
                        </a>
                        <a href={Resume} target="_blank" rel="noopener noreferrer" className="m-4 hover:font-medium hover:text-2xl transition-all">
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
                    <div className="w-1/2 absolute h-screen flex flex-col text-end right-0 text-2xl font-sans font-extralight z-40">
                        <a href="#about" className="m-4 pr-4 hover:font-medium hover:text-2xl transition-all">
                            About
                        </a>
                        <a href="#projects" className="m-4 pr-4 hover:font-medium hover:text-2xl transition-all">
                            Projects
                        </a>
                        <a href="" className="m-4 pr-4 hover:font-medium hover:text-2xl transition-all">
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