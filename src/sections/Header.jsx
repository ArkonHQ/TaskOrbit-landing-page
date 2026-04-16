import { Link as LinkScroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

const NavLink = ({ title, to }) => (
  <LinkScroll
    to={to}
    offset={-80}
    spy
    smooth
    duration={500}
    activeClass="nav-active"
    className="base-bold max-lg:text-[32px] text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p2 max-lg:my-10 max-lg:h5 z-100"
  >
    {title}
  </LinkScroll>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 max-lg:py-4",
        hasScrolled ? "py-5 bg-black-100/40 backdrop-blur-[10px]" : "py-10",
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5 cursor-pointer">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/Untitled-2.png" width={95} height={55} alt="logo" />
        </a>

        <div className="hidden lg:flex w-full justify-center">
          <ul className="flex items-center gap-8">
            <li>
              <NavLink title="Features" to="Features" />
            </li>
            <li>
              <NavLink title="how it works" to="how-it-works" />
            </li>
            <li className="nav-logo">
              <LinkScroll to="hero" offset={-80} spy smooth duration={500}>
                <img
                  src="/images/Untitled-2.png"
                  width={86}
                  height={55}
                  alt="logo"
                />
              </LinkScroll>
            </li>
            <li>
              <NavLink title="For who" to="ForWho" />
            </li>
            <li>
              <NavLink title="Get Started" to="cta" />
            </li>
          </ul>
        </div>

        <div className="lg:hidden relative">
          <button
            className="z-20 size-10 border-2 border-s2/25 rounded-xl flex justify-center items-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={`/images/${isOpen ? "close" : "menu"}.svg`}
              className="size-sm object-contain"
              alt={isOpen ? "close" : "menu"}
            />
          </button>

          <div
            className={clsx(
              "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-auto min-w-50 max-w-[calc(100vw-2rem)] bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top",
              isOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none",
            )}
          >
            <nav className="py-4 px-5">
              <ul className="flex flex-col gap-4 whitespace-nowrap">
                <li>
                  <LinkScroll
                    to="Features"
                    offset={-80}
                    spy
                    smooth
                    duration={500}
                    className="block text-white text-lg font-medium hover:text-cyan-400 transition"
                    onClick={closeMenu}
                  >
                    Features
                  </LinkScroll>
                </li>
                <li>
                  <LinkScroll
                    to="how-it-works"
                    offset={-80}
                    spy
                    smooth
                    duration={500}
                    className="block text-white text-lg font-medium hover:text-cyan-400 transition"
                    onClick={closeMenu}
                  >
                    How it works
                  </LinkScroll>
                </li>
                <li>
                  <LinkScroll
                    to="ForWho"
                    offset={-80}
                    spy
                    smooth
                    duration={500}
                    className="block text-white text-lg font-medium hover:text-cyan-400 transition"
                    onClick={closeMenu}
                  >
                    For who
                  </LinkScroll>
                </li>
                <li>
                  <LinkScroll
                    to="cta"
                    offset={-10}
                    spy
                    smooth
                    duration={500}
                    className="block text-white text-lg font-medium hover:text-cyan-400 transition"
                    onClick={closeMenu}
                  >
                    Get Started
                  </LinkScroll>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
