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
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useViewMode } from "../contexts/ViewModeContext";
import { ProfileSelector, ViewModeBadge } from "./ProfileSelector";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, language, toggleLanguage } = useLanguage();
  const { viewMode } = useViewMode();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: t.nav.home, path: "/", icon: HomeIcon },
    { name: t.nav.about, path: "/about", icon: User },
    { name: t.nav.experience, path: "/experience", icon: Code2 },
    { name: t.nav.projects, path: "/projects", icon: FolderGit2 },
    { name: t.nav.contact, path: "/contact", icon: Mail },
  ];

  /* Links destacados por perfil */
  const priorityPath =
    viewMode === "recruiter"
      ? "/contact"
      : viewMode === "developer"
        ? "/projects"
        : null;

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
          className="flex flex-col items-start group cursor-pointer no-underline text-white relative"
        >
          {/* Título da página atual */}
          <span className="text-xl mb-2 font-serif tracking-[0.12em] leading-none">
            {getHeaderTitle()}
          </span>
          {/* Linha abaixo */}
          <div className="w-[140%] h-[2.5px] bg-white rounded-full opacity-90" />
        </Link>

        <div className="flex items-center gap-3">
          {/* Badge do perfil ativo */}
          <ViewModeBadge />

          {/* Botão de idioma */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white bg-(--bg-glass) hover:bg-(--bg-glass-hover) border border-(--border-subtle) px-3 py-1.5 rounded-full transition-colors cursor-pointer"
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
            className="bg-transparent border-none cursor-pointer flex flex-col gap-2 rounded-lg group p-2 hover:bg-(--bg-glass) transition-all"
          >
            <span className="block bg-white group-hover:bg-accent transition-all h-0.5 w-11.25"></span>
            <span className="block bg-white group-hover:bg-accent transition-all h-0.5 w-11.25"></span>
            <span className="block bg-white group-hover:bg-accent transition-all h-0.5 w-6.25"></span>
          </button>
        </div>
      </header>

      {/* Overlay do Menu em Fullscreen/Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex justify-end transition-opacity duration-300"
          onClick={closeMenu}
        >
          <div
            className="w-full max-w-md bg-(--bg-dark) border-l border-(--border-accent) h-full p-8 md:p-12 flex flex-col justify-between relative overflow-hidden animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Elementos de brilho ambiente no fundo do menu */}
            <div className="absolute top-1/4 -right-20 w-64 h-64 bg-accent/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 -left-20 w-64 h-64 bg-accent-secondary/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* Header do Menu */}
            <div className="flex justify-between items-center pb-6 border-b border-(--border-accent-subtle) z-10">
              <span className="text-xl font-bold tracking-wider text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]"></span>
                {t.nav.menu}
              </span>
              <button
                onClick={closeMenu}
                aria-label="Fechar Menu"
                className="absolute top-10 right-10 md:top-12 md:right-20 bg-accent/10 hover:bg-accent/25 text-accent-light hover:text-white border border-(--border-accent-subtle) rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all hover:scale-105 shadow-[0_0_12px_var(--glow-accent-medium)]"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links de Navegação */}
            <nav className="my-auto py-6 z-10">
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;
                  const isPriority = link.path === priorityPath;
                  return (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className={`flex items-center justify-between p-3.5 rounded-2xl no-underline transition-all duration-300 group border ${
                          isActive
                            ? "bg-linear-to-r from-accent/20 to-accent/5 border-(--border-accent) text-white shadow-[0_0_20px_var(--glow-accent-subtle)] font-medium"
                            : isPriority
                              ? "border-white/15 text-white/80 hover:text-white hover:bg-(--bg-glass) hover:translate-x-1.5 bg-white/3"
                              : "text-(--text-muted) border-transparent hover:text-white hover:bg-(--bg-glass) hover:translate-x-1.5"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                              isActive
                                ? "bg-accent text-white shadow-[0_0_12px_var(--glow-accent-strong)]"
                                : isPriority
                                  ? "bg-accent/15 text-accent-light group-hover:text-white group-hover:bg-accent/20"
                                  : "bg-white/5 text-(--text-muted) group-hover:text-white group-hover:bg-accent/20"
                            }`}
                          >
                            <Icon size={20} />
                          </div>
                          <span className="text-lg tracking-wide font-sans">
                            {link.name}
                          </span>
                        </div>
                        {isPriority && !isActive && (
                          <span
                            style={{
                              color: "#d946ef",
                              borderColor: "rgba(217,70,239,0.35)",
                              background: "rgba(217,70,239,0.08)",
                            }}
                          ></span>
                        )}
                        <ChevronRight
                          size={18}
                          className={`transition-all duration-300 ${
                            isActive
                              ? "text-accent-light translate-x-0 opacity-100"
                              : "opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0"
                          }`}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Seletor de Perfil */}
            <div className="z-10 pt-5 border-t border-(--border-accent-subtle)">
              <ProfileSelector onSelect={closeMenu} />
            </div>

            {/* Rodapé do Menu */}
            <div className="pt-4 flex flex-col gap-2 z-10">
              <div className="text-xs text-(--text-subtle) font-medium">
                © {new Date().getFullYear()} Wesley Domingos
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
