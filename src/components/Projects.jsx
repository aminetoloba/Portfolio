import { useState } from "react";
import { X } from "lucide-react";

const ProjectCard = ({ title, imageUrl, githubUrl, description, screenshots }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="relative h-64 bg-cover bg-center rounded-lg shadow hover:shadow-xl transition group cursor-pointer"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex flex-col items-center justify-center space-y-4 opacity-0 group-hover:opacity-100 transition">
  <p className="text-white text-center font-semibold text-xl">{title}</p>

  <div className="flex space-x-4">
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300"
    >
      Code
    </a>
    <button
      onClick={() => setShowModal(true)}
      className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300"
    >
      Détails
    </button>
  </div>
</div>

      </div>

      {showModal && (
  <div
    onClick={() => setShowModal(false)}
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
    >
      {/* Bouton X correctement placé */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 bg-white border border-gray-300 rounded-full p-1 text-gray-700 hover:text-black hover:bg-gray-100 transition"
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      
      <div className="p-4 overflow-y-auto space-y-4 flex-1">
        <p className="text-gray-700">{description}</p>

        {screenshots.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`screenshot-${index}`}
            className={`rounded-md ${
            title === "EMSI SmartPresence" ? "w-1/4 mx-auto" : "w-full"
          }`}   
          />
        ))}
      </div>
    </div>
  </div>
)}
    </>
  );
};

const ProjectsGrid = () => {
  const projects = [
    {
      title: "Application e-commerce",
      imageUrl: "/images/login.png",
      githubUrl: "https://github.com/aminetoloba/ecomm-meanstack",
      description: "Notre plateforme e-commerce est une solution moderne et intuitive permettant aux utilisateurs de parcourir, commander et payer facilement en ligne. Elle intègre un système de gestion de panier, un espace client sécurisé et un suivi des commandes en temps réel. Développée avec des technologies performantes, cette plateforme offre une expérience fluide aussi bien sur mobile que sur ordinateur. Conçue pour un administrateur et les utilisateurs finaux, elle permet une gestion centralisée des produits et un parcours d'achat simple et efficace.",
      screenshots: [
        "/images/login.png",
        "/images/inscription.png",
        "/images/header.png",
        "/images/user-card1.png",
        "/images/user-card2.png",
        "/images/footer.png",
        "/images/user-category.png",
        "/images/user-profil.png",
        "/images/user-wishlists.png",
        "/images/user-panier.png",
        "/images/user-cmd.png",
        "/images/user-adresse.png",
        "/images/user-paiement.png",
        "/images/admin-dashboard.png",
        "/images/admin-category.png",
        "/images/admin-products.png",
        "/images/admin-brands.png",
        "/images/admin-cmd.png",
      ],
    },
    {
      title: "EMSI SmartPresence",
      imageUrl: "/images/mobile-login.png",
      githubUrl: "https://github.com/aminetoloba/EMSISmartPresence",
      description: "Le projet consiste à developper une application mobile Android conviviale et intuitive, développée pour simplifier la gestion des absences au sein de l'EMSI. Destinée aux professeurs, cette solution leur permet d'enregistrer, consulter et suivre les absences des étudiants directement depuis leur smartphone, offrant ainsi un gain de temps et une meilleure organisation au quotidien.",
      screenshots: [
        "/images/mobile-logo.png",
        "/images/mobile-register.png",
        "/images/mobile-login.png",
        "/images/mobile-home.png",
        "/images/mobile-liste1.png",
        "/images/mobile-liste2.png",
        "/images/mobile-emploi1.png",
        "/images/mobile-emploi2.png",
        "/images/mobile-doc1.png",
        "/images/mobile-doc2.png",
        "/images/mobile-localisation.png",
        "/images/mobile-gemini.png",
      ],
    },
    {
      title: "Mon Portfolio Personnel",
      imageUrl: "/images/home1.png",
      githubUrl: "https://github.com/aminetoloba/ecomm-meanstack",
      description: "J'ai conçu et développé mon propre portfolio afin de présenter mes compétences, mes projets et mon parcours professionnel. Ce site responsive et moderne met en avant mon expertise en React, Tailwind CSS et Node.js, avec une attention particulière portée à l'expérience utilisateur et aux performances. N'hésitez pas à le consulter pour en savoir plus sur mon travail et mes réalisations.",
      screenshots: [
        "/images/home1.png",
        "/images/home2.png",
        "/images/about.png",
        "/images/skills.png",
        "/images/skills2.png",
        "/images/projets1.png",
        "/images/certif1.png",
        "/images/certif2.png",
        "/images/certif3.png",
        "/images/contact.png",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h4 className="text-xl md:text-4xl font-bold text-center text-blue-700 mb-10 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-700 after:mx-auto after:mt-4">
         Découvrez ici quelques-uns des projets sur lesquels j'ai travaillé.
      </h4>
   <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4 pb-12">
        {projects.map((proj, index) => (
         <ProjectCard key={index} {...proj} />
      ))}
   </section>
  </div>
);

};

export default ProjectsGrid;
