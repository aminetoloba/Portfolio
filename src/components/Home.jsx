
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Download,
  Mail,
  Code2,
  Braces,
  Database,
  Layers,
  BriefcaseBusiness
} from 'lucide-react';

const technologies = [
  { name: '.NET / C#', icon: Code2 },
  { name: 'Angular / React', icon: Layers },
  { name: 'PostgreSQL', icon: Database },
  { name: 'REST API', icon: Braces }
];

const HeroIllustration = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="absolute inset-10 bg-blue-100/70 blur-3xl rounded-full" />

      <svg
        viewBox="0 0 600 480"
        role="img"
        aria-label="Illustration d'un développeur travaillant sur une application informatique"
        className="relative z-10 w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="screenGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        {/* Décorations */}
        <circle cx="300" cy="230" r="185" fill="#EFF6FF" />
        <circle cx="75" cy="90" r="5" fill="#93C5FD" />
        <circle cx="520" cy="110" r="7" fill="#BFDBFE" />
        <circle cx="490" cy="370" r="5" fill="#60A5FA" />

        {/* Panneau flottant gauche */}
        <rect x="25" y="155" width="145" height="105" rx="15" fill="white" stroke="#DBEAFE" strokeWidth="2" />
        <rect x="43" y="175" width="35" height="35" rx="9" fill="#DBEAFE" />
        <path d="M55 192 L63 184 L71 192 L63 200" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
        <rect x="88" y="180" width="62" height="7" rx="3" fill="#93C5FD" />
        <rect x="88" y="195" width="45" height="6" rx="3" fill="#DBEAFE" />
        <rect x="43" y="225" width="107" height="7" rx="3" fill="#DBEAFE" />

        {/* Panneau flottant droit */}
        <rect x="440" y="185" width="135" height="110" rx="15" fill="white" stroke="#DBEAFE" strokeWidth="2" />
        <circle cx="475" cy="220" r="13" fill="#DCFCE7" />
        <path d="M469 220 L474 225 L483 214" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="498" y="216" width="58" height="7" rx="3" fill="#93C5FD" />
        <rect x="498" y="232" width="40" height="6" rx="3" fill="#DBEAFE" />
        <rect x="460" y="258" width="95" height="7" rx="3" fill="#DBEAFE" />

        {/* Écran principal */}
        <rect x="115" y="65" width="370" height="250" rx="19" fill="url(#screenGradient)" />
        <rect x="115" y="65" width="370" height="36" rx="19" fill="#1E293B" />
        <path d="M115 85 V101 H485 V85" fill="#1E293B" />

        <circle cx="139" cy="83" r="5" fill="#F87171" />
        <circle cx="157" cy="83" r="5" fill="#FBBF24" />
        <circle cx="175" cy="83" r="5" fill="#4ADE80" />

        <text x="145" y="130" fontSize="13" fill="#60A5FA" fontFamily="monospace">01</text>
        <text x="180" y="130" fontSize="13" fill="#F8FAFC" fontFamily="monospace">const application = () =</text>

        <text x="145" y="160" fontSize="13" fill="#60A5FA" fontFamily="monospace">02</text>
        <text x="180" y="160" fontSize="13" fill="#A5B4FC" fontFamily="monospace">{'{'}</text>

        <text x="145" y="190" fontSize="13" fill="#60A5FA" fontFamily="monospace">03</text>
        <text x="200" y="190" fontSize="13" fill="#4ADE80" fontFamily="monospace">buildSolutions()</text>

        <text x="145" y="220" fontSize="13" fill="#60A5FA" fontFamily="monospace">04</text>
        <text x="180" y="220" fontSize="13" fill="#A5B4FC" fontFamily="monospace">{'}'}</text>

        <rect x="145" y="245" width="190" height="7" rx="3" fill="#334155" />
        <rect x="145" y="263" width="125" height="7" rx="3" fill="#475569" />
        <rect x="145" y="281" width="160" height="7" rx="3" fill="#334155" />

        {/* Base du bureau */}
        <path d="M75 350 H525 L555 380 H45 Z" fill="#CBD5E1" />
        <path d="M105 380 H495 L475 405 H125 Z" fill="#94A3B8" />

        {/* Ordinateur portable */}
        <rect x="215" y="320" width="170" height="105" rx="9" fill="#334155" />
        <rect x="224" y="329" width="152" height="85" rx="4" fill="#EFF6FF" />
        <rect x="240" y="345" width="90" height="7" rx="3" fill="#2563EB" />
        <rect x="240" y="361" width="120" height="6" rx="3" fill="#BFDBFE" />
        <rect x="240" y="377" width="70" height="6" rx="3" fill="#BFDBFE" />

        {/* Personnage stylisé */}
        <path d="M180 355 C175 305 190 275 240 275 C290 275 305 320 300 355 L290 380 H180 Z" fill="url(#blueGradient)" />
        <circle cx="240" cy="260" r="34" fill="#F1B899" />
        <path d="M207 260 C205 225 230 210 260 225 C277 233 279 251 273 260 C262 246 246 244 230 249 L207 260 Z" fill="#1E293B" />
        <path d="M214 300 C235 320 257 320 276 299" fill="none" stroke="#1D4ED8" strokeWidth="5" strokeLinecap="round" />

        {/* Bras */}
        <path d="M195 315 Q170 345 225 365" stroke="#2563EB" strokeWidth="20" fill="none" strokeLinecap="round" />
        <path d="M278 315 Q310 340 345 370" stroke="#2563EB" strokeWidth="20" fill="none" strokeLinecap="round" />

        {/* Petite plante */}
        <path d="M535 350 V405" stroke="#15803D" strokeWidth="4" />
        <path d="M535 370 Q500 345 500 365 Q505 385 535 380" fill="#4ADE80" />
        <path d="M535 390 Q565 355 570 380 Q560 400 535 400" fill="#22C55E" />
      </svg>

      {/* Badge flottant */}
      <div className="absolute top-8 right-0 md:-right-4 z-20 bg-white border border-slate-100 shadow-lg rounded-xl px-4 py-3 flex items-center gap-3">
        <div className="bg-green-100 p-2 rounded-lg">
          <Code2 size={22} className="text-green-600" />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-800">Code & Innovation</p>
          <p className="text-xs text-slate-500">Des idées aux solutions</p>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const cvUrl = `${process.env.PUBLIC_URL}/CV_Mahamat_AMINE%20TOLOBA.pdf`;

  return (
    <div className="bg-[#F7F9FC] text-slate-700">

      {/* HERO */}
      <section className="section-container min-h-[calc(100vh-80px)] flex items-center py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8 w-full">

          {/* Présentation */}
          <div className="order-2 lg:order-1">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-7">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-sm font-semibold text-blue-700 tracking-wide">
                INGÉNIEUR INFORMATIQUE
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14243B] leading-tight mb-5">
              Bonjour, je suis
              <span className="block text-blue-600 mt-2">
                AMINE TOLOBA.
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-slate-600 mb-5">
              Ingénieur en Informatique & Réseaux | Développeur Full Stack
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-slate-500 max-w-xl mb-8">
              Je conçois et développe des applications web modernes,
              de la conception des API à la réalisation des interfaces utilisateur.
              J'aime transformer les idées en solutions concrètes, performantes
              et évolutives.
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3 mb-9">
              {technologies.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg shadow-sm"
                  >
                    <Icon size={17} className="text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={cvUrl}
                download="CV_Amine_Toloba.pdf"
                className="btn-primary"
              >
                <Download size={19} />
                Télécharger mon CV
              </a>

              <Link to="/contact" className="btn-secondary">
                <Mail size={19} />
                Me contacter
                <ArrowUpRight size={17} />
              </Link>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-5 mt-9 text-sm text-slate-500">
              <span>Retrouvez-moi sur :</span>

              <a
                href="https://github.com/aminetoloba"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="order-1 lg:order-2">
            <HeroIllustration />
          </div>

        </div>
      </section>

      {/* DISPONIBILITÉ */}
      <section className="section-container pb-16">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7 md:p-9 flex flex-col md:flex-row items-center gap-6">

          <div className="bg-white rounded-full p-5 shadow-sm">
            <BriefcaseBusiness size={35} className="text-blue-600" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-[#14243B] mb-2">
              Ouvert aux opportunités professionnelles
            </h2>

            <p className="text-slate-600">
              Vous avez un projet ou une opportunité en développement logiciel ?
              Échangeons ensemble !
            </p>
          </div>

          <Link
            to="/contact"
            className="btn-primary whitespace-nowrap"
          >
            Discutons ensemble
            <ArrowUpRight size={18} />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Home;
