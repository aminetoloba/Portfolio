import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
} from 'lucide-react';

const experiences = [
  {
    company: 'IN-CTECH',
    location: 'Casablanca, Maroc',
    role: 'Stagiaire Développeur Full Stack',
    type: 'Projet de Fin d’Études (PFE)',
    period: 'Mars 2026 – Septembre 2026',
    description:
      'Refonte et migration d’une application de management interne de NestJS / Angular vers .NET 9 et React, avec intégration d’un module Ressources Humaines, en méthodologie Agile Scrum.',
    missions: [
      'Participation à la migration globale du backend vers .NET 9 (Clean Architecture, Domain-Driven Design).',
      'Développement de modules métiers : facturation, avoirs, bons de commande et bons de livraison.',
      'Conception du module RH : gestion des utilisateurs et des rôles, imputations, demandes de congés et demandes de documents.',
      'Développement d’API .NET, intégration avec le frontend React et PostgreSQL, et mise en place de tests unitaires.',
    ],
    technologies: [
      '.NET 9',
      'C#',
      'React',
      'PostgreSQL',
      'Clean Architecture',
      'DDD',
      'Git',
      'Scrum',
    ],
  },
  {
    company: 'IN-CTECH',
    location: 'Casablanca, Maroc',
    role: 'Stagiaire Développeur Full Stack',
    type: 'Stage professionnel',
    period: 'Août 2025 – Octobre 2025',
    description:
      'Participation au développement du système d’information interne d’une fondation chargée de la petite enfance.',
    missions: [
      'Conception et implémentation de modules pour la gestion des consultations et des conventions.',
      'Contribution à la base de données et à l’interface utilisateur.',
      'Réalisation de tests, maintenance et amélioration des fonctionnalités existantes.',
    ],
    technologies: [
      'Laravel',
      'React',
      'PostgreSQL',
      'Tailwind CSS',
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <article className="relative pl-14 sm:pl-20">

      {/* Icône décorative de la timeline */}
      <div className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow-md sm:left-2 sm:h-12 sm:w-12">
        <BriefcaseBusiness size={20} />
      </div>

      {/* Carte de l'expérience */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:shadow-lg sm:p-7">

        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              {experience.type}
            </span>

            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              {experience.role}
            </h2>

            <p className="mt-1 font-semibold text-blue-600">
              {experience.company}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <CalendarDays size={16} className="shrink-0 text-blue-600" />
            <span>{experience.period}</span>
          </div>
        </div>

        <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
          <MapPin size={16} className="shrink-0 text-blue-600" />
          {experience.location}
        </div>

        <div className="mb-5 border-t border-gray-100 pt-5">
          <p className="text-sm leading-7 text-slate-600">
            {experience.description}
          </p>
        </div>

        <div className="mb-5">
          <h3 className="mb-3 font-bold text-slate-900">
            Missions réalisées
          </h3>

          <ul className="space-y-3">
            {experience.missions.map((mission, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm leading-6 text-slate-600"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                <span>{mission}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-100 pt-5">
          <h3 className="mb-3 font-bold text-slate-900">
            Technologies utilisées
          </h3>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
};

const Experiences = () => {
  return (
    <section className="section-container py-12 md:py-20">

      {/* En-tête */}
      <div className="mb-12 text-center">
        <p className="section-eyebrow">
          MON PARCOURS PROFESSIONNEL
        </p>

        <h1 className="section-title">
          Mes expériences
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Découvrez les expériences professionnelles qui m’ont permis
          de développer mes compétences en conception et développement
          d’applications web Full Stack.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-3xl space-y-10">

        {/* Ligne verticale décorative */}
        <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-blue-100 sm:left-7" />

        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.period}`}
            experience={experience}
          />
        ))}

      </div>
    </section>
  );
};

export default Experiences;