import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex flex-wrap items-center justify-between bg-black/70 px-10 py-6 text-white shadow-lg shadow-black/10 backdrop-blur-md md:px-20">
      <a
        href="#"
        className="group flex items-center gap-3"
        aria-label="Vaibhav's Portfolio - Home"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-500 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
          VK
        </span>
        <span className="text-lg font-black tracking-tight sm:text-xl">
          <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Vaibhav&apos;s
          </span>{` `}
          <span className="font-medium text-slate-300">Portfolio</span>
        </span>
      </a>

      <ul
        className={`${isMenuOpen ? "flex" : "hidden"} mt-4 w-full flex-col gap-2 rounded-xl bg-black/30 px-2 py-2 text-center font-semibold md:mt-0 md:flex md:w-auto md:flex-row md:gap-6 md:bg-transparent md:p-0`}
      >
        {[
          ["About", "#about"],
          ["Skills", "#skills"],
          ["Experience", "#experience"],
          ["Projects", "#projects"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <li key={href}>
            <a
              href={href}
              onClick={closeMenu}
              className="block p-1 transition-colors duration-300 hover:text-cyan-300 md:p-0"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="absolute right-10 top-6 cursor-pointer transition-colors duration-300 hover:text-cyan-300 md:hidden"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
      </button>
    </nav>
  );
};

export default Navbar;
