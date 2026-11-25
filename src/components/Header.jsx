
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Expériences', path: '/experiences' },
    { name: 'Compétences', path: '/skills' },
    { name: 'Projets', path: '/projects' },
    { name: 'Certifications', path: '/certificates' },
  ];

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => currentPath === path;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-sm transition group-hover:bg-blue-700">
            A.
          </span>

          <span className="flex flex-col">
            <span className="text-base font-bold tracking-wide text-slate-900">
              AMINE TOLOBA
            </span>
            <span className="text-[11px] font-medium tracking-wider text-slate-500">
              SOFTWARE ENGINEER
            </span>
          </span>
        </Link>

        {/* Navigation desktop */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                isActive(link.path)
                  ? 'text-blue-600'
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {link.name}

              {isActive(link.path) && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-blue-600" />
              )}
            </Link>
          ))}

          {/* Contact CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Me contacter
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Bouton hamburger mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Overlay mobile */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 top-16 z-40 bg-slate-950/40 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Menu mobile */}
      <div
        className={`fixed right-0 top-16 z-50 w-[min(82%,320px)] rounded-bl-2xl border-l border-b border-slate-200 bg-white shadow-xl transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'pointer-events-none invisible -translate-y-2 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 p-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                isActive(link.path)
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Me contacter
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
