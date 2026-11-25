
import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  ArrowUpRight
} from 'lucide-react';

import bgImg from '../assets/contact.jpg';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Formation',
    description: 'Ingénieur en Informatique et Réseaux – EMSI'
  },
  {
    icon: BriefcaseBusiness,
    title: 'Expérience',
    description: 'Projet de fin d’études chez IN-CTECH'
  },
  {
    icon: Code2,
    title: 'Spécialité',
    description: 'Développement Full Stack'
  }
];

const About = () => {
  return (
    <section className="section-container py-16 md:py-24 overflow-x-hidden">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Image */}
        <div className="hidden lg:block relative order-2 lg:order-1">
          <div className="absolute -inset-4 bg-blue-100 rounded-3xl rotate-3" />

          <img
            src={bgImg}
            alt="Illustration représentant l'univers informatique"
            className="relative w-full max-w-lg mx-auto h-[350px] md:h-[450px] object-cover rounded-2xl shadow-lg"
          />

          <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-md">
            <p className="text-sm font-semibold text-blue-600">
              MA PHILOSOPHIE
            </p>
            <p className="text-slate-700 font-medium">
              Apprendre, concevoir et créer des solutions utiles.
            </p>
          </div>
        </div>

        {/* Présentation */}
        <div className="order-1 lg:order-2">

          <span className="section-eyebrow">
            Découvrez mon parcours
          </span>

          <h1 className="section-title mt-3 mb-6">
            À propos de moi
          </h1>

          {/* Image visible uniquement sur mobile */}
          <div className="lg:hidden relative mb-8">
            <div className="absolute -inset-2 bg-blue-100 rounded-3xl rotate-2" />

            <img
              src={bgImg}
              alt="Illustration représentant l'univers informatique"
              className="relative w-full h-[280px] object-cover rounded-2xl shadow-lg"
            />

            {/* Encadré philosophie */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-md">
              <p className="text-sm font-semibold text-blue-600">
                MA PHILOSOPHIE
              </p>
              <p className="text-slate-700 font-medium">
                Apprendre, concevoir et créer des solutions utiles.
              </p>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-5">
            Je suis ingénieur fraîchement diplômé en Informatique et
            Réseaux de l'EMSI Casablanca, passionné par le développement
            logiciel et la conception d'applications web.
          </p>

          <p className="text-slate-600 leading-relaxed mb-5">
            Au cours de mon parcours, j'ai travaillé sur différents
            projets qui m'ont permis de développer mes compétences en
            développement Full Stack, en conception d'API REST et en
            gestion de bases de données.
          </p>

          <p className="text-slate-600 leading-relaxed mb-5">
            Lors de mon expérience chez <strong>IN-CTECH</strong>,
            j'ai notamment participé à la refonte et à la migration
            d'une application de management interne vers .NET 9,
            avec l'intégration d'un module de gestion des ressources
            humaines. J'ai ainsi pu mettre en pratique des concepts
            comme Clean Architecture, DDD et CQRS.
          </p>

          <p className="text-slate-600 leading-relaxed mb-8">
            Curieux et motivé, j'aime apprendre de nouvelles
            technologies, relever des défis techniques et concevoir
            des solutions fiables, maintenables et évolutives.
          </p>

          {/* Informations clés */}
          <div className="space-y-4 mb-9">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <Icon size={22} className="text-blue-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link to="/contact" className="btn-primary">
            Échangeons ensemble
            <ArrowUpRight size={18} />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default About;