import { Github, Linkedin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} <span className="font-semibold">AMINE TOLOBA</span>. Tous droits réservés.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/aminetoloba"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white transition"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mahamat-amine-toloba-450242278"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white transition"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="tel:+212634798064"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white transition"
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold">Téléphone :</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;