import React, { useState, useEffect } from "react";
import { caseStudyNavbar, brandName } from "../../data/data";
import Button from "../ui/Button";
import useScrollSpy from "../../hooks/useScrollSpy";

const sectionIds = caseStudyNavbar.map((link) =>
    link.src.replace("#", "")
);

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(
        window.innerWidth < 768
    );

    const activeSection = useScrollSpy(sectionIds);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () =>
            window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="navbar fixed top-0 z-50 w-full">
            <div className="logo flex items-center">
                <h3 className="text-white text-lg font-medium">
                    {brandName.brandName}
                </h3>
            </div>

            <div className="menu flex justify-end items-center gap-2 md:gap-9">
                <ul
                    className={`
                        ${menuOpen ? "top-20" : "top-[-500px]"}
                        ${isMobile ? "-z-50" : "z-0"}
                        text-center
                        transition-all
                        duration-350
                        flex
                        flex-col
                        absolute
                        left-0
                        w-full
                        bg-black
                        text-white
                        p-5
                        gap-4
                        md:flex
                        md:relative
                        md:top-0
                        md:w-auto
                        md:bg-transparent
                        md:p-0
                        md:flex-row
                        md:gap-6
                        lg:gap-10
                    `}
                >
                    {caseStudyNavbar.map((link) => {
                        const sectionId = link.src.replace("#", "");

                        const isActive =
                            activeSection === sectionId;

                        return (
                            <li
                                key={link.id}
                                className={`
                                    px-3
                                    py-1
                                    rounded-md
                                    transition-all
                                    duration-300

                                    ${isActive
                                        ? "bg-(--primary) text-black"
                                        : "bg-transparent text-white hover:bg-(--primary) hover:text-black"
                                    }
                                `}
                            >
                                <a
                                    href={link.src}
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    {link.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <Button
                    href="#contactForm"
                    text="Book Call"
                    bg_color="--primary"
                    text_color="black"
                    hover="--secondary"
                />

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    type="button"
                    className={`relative w-8 h-8 ${isMobile ? "" : "hidden"
                        }`}
                >
                    <span
                        className={`absolute h-0.5 w-6 bg-white transition-all ${menuOpen
                                ? "rotate-45 top-4"
                                : "top-2"
                            }`}
                    />

                    <span
                        className={`absolute h-0.5 w-6 bg-white top-4 transition-all ${menuOpen ? "opacity-0" : ""
                            }`}
                    />

                    <span
                        className={`absolute h-0.5 w-6 bg-white transition-all ${menuOpen
                                ? "-rotate-45 top-4"
                                : "top-6"
                            }`}
                    />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;