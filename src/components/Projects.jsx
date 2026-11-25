import { useState } from "react";
import { X } from "lucide-react";


const ProjectCard = ({ title, imageUrl, githubUrl, description, screenshots }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* Image du projet */}
        <div className="relative h-56 shrink-0 overflow-hidden bg-slate-50">
          <img
            src={process.env.PUBLIC_URL + imageUrl}
            alt={`Aperçu du projet ${title}`}
            className="h-full w-full object-cover object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Informations et actions */}
        <div className="flex flex-1 flex-col p-5">
          <h2 className="mb-3 text-lg font-bold text-slate-800">
            {title}
          </h2>

          <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">
            {description}
          </p>

          <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full text-sm"
            >
              Voir le code
            </a>

            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="btn-primary w-full text-sm"
            >
              Voir les captures
            </button>
          </div>
        </div>
      </article>

      {/* Fenêtre des détails */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Détails du projet ${title}`}
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 p-5">
              <h2 className="text-xl font-bold text-slate-800">
                {title}
              </h2>

              <button
                type="button"
                onClick={() => setShowModal(false)}
                aria-label="Fermer les détails"
                className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto p-5">
              <p className="leading-relaxed text-slate-600">
                {description}
              </p>

              {screenshots.map((src, index) => (
                <img
                  key={`${src}-${index}`}
                  src={src}
                  alt={`Capture ${index + 1} du projet ${title}`}
                  loading="lazy"
                  className={`mx-auto rounded-lg border border-slate-100 ${
                    title === "EMSI SmartPresence"
                      ? "w-full max-w-xs"
                      : "w-full"
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
    <div className="w-full max-w-6xl min-w-0 mx-auto p-4 overflow-x-clip">
      <h4 className="text-xl md:text-4xl font-bold text-center text-blue-700 mb-10 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-700 after:mx-auto after:mt-4">
         Découvrez ici quelques-uns des projets sur lesquels j'ai travaillé.
      </h4>
   <section className="grid w-full min-w-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto p-4 pb-12">
        {projects.map((proj, index) => (
         <ProjectCard key={index} {...proj} />
      ))}
   </section>
  </div>
);

};

export default ProjectsGrid;
