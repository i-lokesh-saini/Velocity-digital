import React, { useState, useEffect } from 'react';
import { navlinks } from '../data/data';
import Button from '../component/Button';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);



    return (
        <>
            <nav className="navbar fixed top-0 z-50">
                <div className="logo flex items-center">
                    {/* <img src="../../public/hero.png" alt="logo" /> */}
                    <h3 className='text-white'>Velocity digital</h3>
                </div>
                <div className="menu flex justify-around items-center gap-0 md:gap-6">
                    <ul onClick={() => setMenuOpen(isMobile ? !menuOpen : false)} className={`${menuOpen ? "flex flex-col" : "hidden"} absolute top-18 left-0 z-50 h-content w-full text-center gap-4 bg-black text-white p-5 md:flex md:justify-around md:gap-5 md:relative md:top-0 md:p-0`}>
                        {navlinks.map((link) => (
                            <li key={link.id}><a href={link.src}>{link.title}</a></li>
                        ))}
                    </ul>
                    <Button text="Book Call" bg_color="--primary" text_color="black" hover="--primary-hover" className="w-fit" />
                    <button onClick={() => setMenuOpen(!menuOpen)} type='button' className={`relative w-8 h-8`} >
                        <span className={`absolute h-0.5 w-6 bg-white transition-all ${menuOpen ? "rotate-45 top-4" : "top-2"}`} />
                        <span className={`absolute h-0.5 w-6 bg-white top-4 transition all ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`absolute h-0.5 w-6 bg-white transition-all ${menuOpen ? "-rotate-45 top-4" : "top-6"}`} />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar