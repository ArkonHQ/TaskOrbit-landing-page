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
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 max-lg:py-4",
        hasScrolled ? "py-5 bg-black-100/40 backdrop-blur-[10px]" : "py-10",
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        {/* Mobile logo */}
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/Untitled-2.png" width={95} height={55} alt="logo" />
        </a>

        {/* Navigation menu */}
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-gray-800 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="Features" to="Features" />
                  <div className="navbar-glass nav-separator" />
                  <NavLink title="Try it" to="hero" />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-80}
                    spy
                    smooth
                    duration={500}
                    className="max-lg:hidden transition-transform duration-500 cursor-pointer"
                  >
                    <img
                      src="/images/Untitled-2.png"
                      width={86}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="How it works" to="how-it-works" />
                  <div className="dot nav-separator" />
                  <NavLink title="Get Started" to="cta" />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden z-2 size-10 border-2 border-s2/25 rounded-xl flex justify-center items-center cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src={`/images/${isOpen ? "close" : "menu"}.svg`}
            className="size-sm object-contain"
            alt={isOpen ? "close" : "menu"}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
