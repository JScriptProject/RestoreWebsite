import React, { useState } from "react";
import logo from "../assets/logo.avif";

function Navbar() {
    const [isNavActive, setIsNavActive] = useState(false);

    return (
        <nav>
            <div className="nav-wrapper">
<button
                className="md:hidden text-3xl text-amber-50 z-30 cursor"
                onClick={() => setIsNavActive(!isNavActive)}
            >
                {isNavActive ? "close" : "☰"}
            </button>
            <a href="#">
                <img src={logo} alt="logo" className="w-35" />
            </a>
            {isNavActive && <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10 lg-hidden" onClick={()=>setIsNavActive(false)}></div>}
             <ul className={`${isNavActive ? "block":"hidden"} md:flex md:flex-row`}>
                <li>
                    <a href="#">How it Works</a>
                </li>
                <li>
                    <a href="#">Features</a>
                </li>
                <li>
                    <a href="#">Pricing</a>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
            </ul>
            <div className="login">
                <button>Login</button>
            </div>
            </div>
            
        </nav>
    );
}

export default Navbar;
