import { Link, useLocation} from 'react-router-dom';
import { MenuIcon, XIcon} from '@heroicons/react/outline';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="bg-zinc-200 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-700">
            TOLOBA.
          </Link>
          {/* Menu desktop */}
          <ul className="hidden md:flex space-x-6">
            <li><Link to="/" className={`font-medium ${currentPath === '/' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Home</Link></li>
            <li><Link to="/about" className={`font-medium ${currentPath === '/about' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>À propos</Link></li>
            <li><Link to="/skills" className={`font-medium ${currentPath === '/skills' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Compétences</Link></li>
            <li><Link to="/projects" className={`font-medium ${currentPath === '/projects' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Projets</Link></li>
            <li><Link to="/certificates" className={`font-medium ${currentPath === '/certificates' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Certifications</Link></li>
            <li><Link to="/contact" className={`font-medium ${currentPath === '/contact' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Contact</Link></li>
          </ul>
          {/* Always show hamburger button */}
          <div className="md:hidden">
            <MenuIcon
              onClick={toggleMenu}
              className="w-7 h-7 text-gray-700 cursor-pointer"
            />
          </div>
        </div>
      </nav>
       {/* Overlay flouté */}
      {menuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 z-40"
        ></div>
      )}
      {/* Slide menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button inside slide */}
        <div className="flex justify-end p-4">
          <XIcon
            onClick={toggleMenu}
            className="w-8 h-8 text-gray-700 cursor-pointer"
          />
        </div>

        <ul className="flex flex-col mt-10 space-y-6 px-6 text-lg font-semibold text-gray-800">
          <li><a href="/" onClick={toggleMenu} className={`font-medium ${currentPath === '/' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Home</a></li>
          <li><a href="/about" onClick={toggleMenu} className={`font-medium ${currentPath === '/about' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>À propos</a></li>
          <li><a href="/projects" onClick={toggleMenu} className={`font-medium ${currentPath === '/projects' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Projets</a></li>
          <li><a href="/skills" onClick={toggleMenu} className={`font-medium ${currentPath === '/skills' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Compétences</a></li>
          <li><a href="/certificates" onClick={toggleMenu} className={`font-medium ${currentPath === '/certificates' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Certifications</a></li>
          <li><a href="/contact" onClick={toggleMenu} className={`font-medium ${currentPath === '/contact' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
