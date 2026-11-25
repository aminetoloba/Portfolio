import { Github, Linkedin, Phone, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-12 bg-slate-900 text-slate-300">

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">

        {/* Partie principale */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Identité */}
          <div className="max-w-md">
            <Link to="/" className="mb-4 inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                A.
              </span>
              <span className="text-lg font-bold tracking-wide text-white">
                AMINE TOLOBA
              </span>
            </Link>

            <h2 className="mb-2 text-xl font-bold leading-snug text-white sm:text-2xl">
              Construisons quelque chose de remarquable.
            </h2>

            <p className="text-sm leading-relaxed text-slate-400">
              Ingénieur en Informatique & Réseaux | Développeur Full Stack.
              Passionné par la conception de solutions numériques.
            </p>
          </div>

          {/* Réseaux et contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Restons en contact
            </h3>

            <div className="flex flex-wrap gap-3">

              <a
                href="https://github.com/aminetoloba"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/mahamat-amine-toloba-450242278/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="tel:+212634798064"
                aria-label="Téléphone"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <Phone size={20} />
              </a>

            </div>

            <a
              href="mailto:mhtamine8@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
            >
              Me contacter par email
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Séparateur et copyright */}
        <div className="mt-10 border-t border-slate-700 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-slate-400 sm:flex-row sm:text-sm">
            <p>
              © {new Date().getFullYear()}{' '}
              <span className="font-semibold text-white">AMINE TOLOBA</span>.
              Tous droits réservés.
            </p>

            <Link
              to="/"
              className="transition hover:text-blue-400"
            >
              Développé avec passion.
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;