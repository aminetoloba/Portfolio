import React from 'react';
import bgImg from '../assets/contact.jpg';

const About = () => {
  return (
    <section className="w-full min-h-screen flex flex-col bg-white shadow-sm px-0 m-0">

  {/* Titre global : affiché toujours en premier en mobile */}
  <h4 className="text-xl font-bold text-center text-blue-700 mt-10 mb-6 md:hidden relative after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-700 after:mx-auto after:mt-4">
    À propos
  </h4>

  <div className="flex flex-col md:flex-row items-center justify-center w-full">

    {/* Image */}
    <div className="order-2 md:order-2 w-full md:w-1/2 flex items-center justify-center p-8">
      <img
        src={bgImg}
        alt="Cyber Image"
        className="w-[90%] max-w-md object-cover rounded-xl shadow-lg"
      />
    </div>

    <div className="order-3 md:order-1 w-full md:w-1/2 h-full flex flex-col justify-center items-center md:items-start text-center md:text-left px-10">

      <h4 className="hidden md:block text-4xl font-bold text-blue-700 mb-6 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-700 after:mx-0 after:mt-4">
        À propos
      </h4>

      <p className="text-lg md:text-xl max-w-xl text-gray-500 mb-6">
        Je suis un développeur passionné spécialisé dans la création de solutions modernes et performantes. Mon objectif est simple : transformer vos idées en projets concrets grâce à des technologies fiables et à des interfaces soignées.
      </p>
      <p className="text-lg md:text-xl max-w-xl text-gray-500 mb-6">
        J’utilise principalement Angular, Tailwind CSS et Node.js, mais je maîtrise également React, .NET, PHP, Python, Django et Spring. Toujours à l'affût des évolutions technologiques, je choisis les outils les plus adaptés pour concevoir des solutions à la fois modernes, fiables et performantes.
      </p>

      <p className="text-lg md:text-xl max-w-xl text-gray-500 mb-6">
        Chaque projet est pour moi l'occasion de relever de nouveaux défis et d'apporter une réelle valeur ajoutée.
      </p>
      <p className="text-lg md:text-xl max-w-xl text-gray-500 mb-6">
        👉
        <a href="/contact" className="text-blue-600 underline font-medium hover:text-blue-800 transition">
          N'hésitez pas à me contacter pour donner vie à vos projets !
        </a>
      </p>
    </div>

  </div>

</section>

  );
};

export default About;