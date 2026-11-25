
import React from 'react';

const skillCategories = [
  {
    title: 'Développement Backend',
    description: 'Développement de la logique métier et des API.',
    skills: [
      { name: 'C / C++ / C#', imgSrc: '/images/C.6a587e4f24852a1ca9d5.png' },
      { name: 'Java', imgSrc: '/images/Java.png' },
      { name: 'Spring', imgSrc: '/images/Spring.png' },
      { name: 'Python', imgSrc: '/images/Python.png' },
      { name: '.NET Core', imgSrc: '/images/Dotnet.c97470dd91ec398e6a3c.png' },
      { name: 'Django', imgSrc: '/images/django.png' },
      { name: 'Laravel', imgSrc: '/images/Laravel.png' },
      { name: 'PHP', imgSrc: '/images/php.png' },
    ],
  },
  {
    title: 'Développement Frontend',
    description: 'Création d’interfaces web modernes et responsives.',
    skills: [
      { name: 'HTML5', imgSrc: '/images/html.2ba4fabc69a89a8f71e6.png' },
      { name: 'CSS3', imgSrc: '/images/css69a82c2d9e45c933a9cb.png' },
      { name: 'JavaScript', imgSrc: '/images/javascript.1ccd6ef9bb1f9c84ef00.png' },
      { name: 'Angular', imgSrc: '/images/angular-icon-seeklogo.png' },
      { name: 'React', imgSrc: '/images/react.0cf951a69d8e58f83f9d.png' },
      { name: 'Bootstrap', imgSrc: '/images/Bootstrap.21c4b8805fff51b47615.png' },
      { name: 'Tailwind CSS', imgSrc: '/images/tailwind.e47ac876b8d4d0bba47a.png' },
    ],
  },
  {
    title: 'Bases de données',
    description: 'Stockage, organisation et gestion des données.',
    skills: [
      { name: 'SQL', imgSrc: '/images/SQL.png' },
      { name: 'MongoDB', imgSrc: '/images/MongoDB.png' },
    ],
  },
  {
    title: 'Outils et environnements',
    description: 'Outils de développement et environnements techniques.',
    skills: [
      { name: 'GitHub', imgSrc: '/images/github.png' },
      { name: 'Shell Script', imgSrc: '/images/shell.png' },
      { name: 'Azure', imgSrc: '/images/azure-icon.png' },
      { name: 'Docker', imgSrc: '/images/docker-mark-blue.png' },
    ],
  },
];

const Tech = ({ imgSrc, name }) => (
  <div className="group flex flex-col items-center justify-center gap-3 p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
    <div className="w-16 h-16 flex items-center justify-center">
      <img
        src={imgSrc}
        alt={`Logo ${name}`}
        className="max-w-full max-h-full object-contain"
        loading="lazy"
      />
    </div>

    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors text-center">
      {name}
    </p>
  </div>
);

const Skills = () => {
  return (
    <section className="section-container py-16 md:py-24">

      {/* Introduction */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="section-eyebrow">
          Mon savoir-faire
        </span>

        <h1 className="section-title mt-3 mb-5">
          Mes compétences techniques
        </h1>

        <p className="text-slate-500 leading-relaxed">
          Découvrez les technologies et outils que j'ai utilisés
          au cours de ma formation, de mes expériences et de mes projets
          personnels.
        </p>
      </div>

      {/* Catégories */}
      <div className="space-y-14">
        {skillCategories.map((category) => (
          <div key={category.title}>

            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
                {category.title}
              </h2>

              <p className="text-sm text-slate-500">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.skills.map((skill) => (
                <Tech
                  key={skill.name}
                  imgSrc={skill.imgSrc}
                  name={skill.name}
                />
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;
