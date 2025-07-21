import React from 'react';
import About from './About';
import Contact from './Contact';
import bgImg from '../assets/premium.png';

const Home = () => {
  return (
    <main className="bg-gray-50 min-h-screen text-gray-800">
    <section className=" gap-4 w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-0 m-0">
  <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-8">
    <h1 className="py-3 text-4xl md:text-6xl font-bold text-blue-700 mb-4">
      Salut, je suis AMINE TOLOBA 👋
    </h1>
    <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
      Développeur Full Stack | Étudiant en Ingénierie Informatique & Réseaux
    </h2>
    <p className="text-lg md:text-xl max-w-xl text-gray-500 mb-6">
      Passionné par le développement web et mobile, j'aime concevoir des solutions innovantes et relever des défis techniques pour transformer les idées en projets concrets.
    </p>
    <a
      href="CV_2025-06-22_Mahamat_AMINE TOLOBA (1).pdf"
      download="CV_Amine_Toloba.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 py-3 px-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-bold mb-10"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
      </svg>
      Télécharger mon CV
    </a>
  </div>

  <div className="order-1 md:order-2 mt-4 sm:mt-0 p-4 w-full bg-[#327AD9] md:w-1/2 flex items-center justify-center p-8 rounded-xl">
  <div className='bg-white rounded-xl p-4'>
    <img
      src={bgImg}
      alt="Cyber Image"
      className="w-[90%] max-w-[700px] object-contain rounded-lg"
      style={{
        objectFit: 'contain',
      }}
    />
  </div>
</div>
</section>

      <section className="text-center py-16 px-6 bg-blue-50">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Disponible pour un stage !</h2>
        <p className="text-gray-600 mb-6">Intéressé par mon profil ? Discutons ensemble de votre projet ou besoin.</p>
        <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition text-sm md:text-base">
          Me contacter
        </a>
      </section>
    </main>
  );
};

export default Home;
