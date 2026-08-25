import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  X,
  Home as HomeIcon,
  User,
  Code2,
  FolderGit2,
  Mail,
  Globe,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, language, toggleLanguage } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: t.nav.home, path: "/", icon: HomeIcon },
    { name: t.nav.about, path: "/about", icon: User },
    { name: t.nav.experience, path: "/experience", icon: Code2 },
    { name: t.nav.projects, path: "/projects", icon: FolderGit2 },
    { name: t.nav.contact, path: "/contact", icon: Mail },
  ];

  const getHeaderTitle = () => {
    switch (location.pathname) {
      case "/about":
        return t.nav.about;
      case "/experience":
        return t.nav.experience;
      case "/projects":
        return t.projects.title;
      case "/contact":
        return t.nav.contact;
      case "/":
      default:
        return "Hello";
    }
  };

  return (
    <>
      <header className="flex justify-between items-start px-10 py-10 md:px-20 md:py-12 z-20">
        <Link
          to="/"
          className="flex flex-col group cursor-pointer no-underline text-white"
        >
          <span className="text-lg mb-1 font-serif tracking-wider">
            {getHeaderTitle()}
          </span>
          <hr className="w-full border-t-[1.5px] border-white m-0" />
        </Link>

        <div className="flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
            aria-label="Toggle Language"
          >
            <Globe size={18} />
            <span className="text-sm font-medium uppercase">{language}</span>
          </button>

          {/* Botão de abrir menu */}
          <button
            onClick={toggleMenu}
            aria-label={t.nav.menu}
            aria-expanded={isOpen}
            className="bg-transparent border-none cursor-pointer flex flex-col gap-2 rounded-lg"
          >
            <span className="block bg-white h-0.5 w-11.25"></span>
            <span className="block bg-white h-0.5 w-11.25"></span>
            <span className="block bg-white h-0.5 w-6.25"></span>
          </button>
        </div>
      </header>

      {/* Overlay do Menu em Fullscreen/Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex justify-end"
          onClick={closeMenu}
        >
          <div
            className="w-full max-w-md bg-linear-to-b from-[#2a1730] to-[#160c18] border-l border-white/10 h-full p-8 md:p-12 flex flex-col justify-between shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Menu */}
            <div className="flex justify-between items-center pb-8 border-b border-white/10">
              <span className="text-xl font-semibold">
                {t.nav.menu}
              </span>
              <button
                onClick={closeMenu}
                aria-label="Fechar Menu"
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links de Navegação */}
            <nav className="my-auto py-8">
              <ul className="flex flex-col gap-6 list-none p-0 m-0">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;
                  return (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className={`flex items-center gap-4 text-2xl font-light tracking-wide p-2 rounded-xl no-underline ${
                          isActive
                            ? "text-purple-400 font-normal translate-x-2 bg-white/5"
                            : "text-gray-300"
                        }`}
                      >
                        <Icon
                          size={26}
                          className={
                            isActive ? "text-purple-400" : "text-purple-300/70"
                          }
                        />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Rodapé do Menu */}
            <div className="pt-6 border-t border-white/10 text-sm text-gray-400 flex flex-col gap-2">
              <span>© {new Date().getFullYear()} Wesley Domingos</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
