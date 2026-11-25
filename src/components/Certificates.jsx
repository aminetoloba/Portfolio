import { useState } from "react";
import { X } from "lucide-react";


const CertificateCard = ({ title, institutions, imageUrl }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      {/* Image du certificat */}
      <div className="flex aspect-[4/3] items-center justify-center bg-gray-50 p-3">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Informations */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-base font-semibold leading-snug text-gray-800">
          {title}
        </h3>

        <p className="flex-1 text-sm text-gray-500">
          {institutions}
        </p>

        <button
          onClick={() => setShowImage(true)}
          className="mt-auto w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700"
        >
          Voir le certificat
        </button>
      </div>

      {/* Fenêtre d'agrandissement */}
      {showImage && (
        <div
          onClick={() => setShowImage(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-3 py-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[calc(100dvh-2rem)] w-full max-w-3xl overflow-y-auto rounded-xl bg-white p-3 sm:p-5"
          >
            <button
              onClick={() => setShowImage(false)}
              aria-label="Fermer"
              className="absolute right-2 top-2 z-10 rounded-full bg-white p-2 text-gray-700 shadow hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>

            <img
              src={imageUrl}
              alt={title}
              className="mx-auto max-h-[calc(100dvh-6rem)] w-full rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </article>
  );
};


const CertificatesGrid = () => {
  const certificates = [
    { title: "Introduction to HTML5",institutions:"UNIVERSITY OF MICHIGAN", imageUrl: "/images/HTML5.png", },
    { title: "Introduction to CSS3",institutions:"UNIVERSITY OF MICHIGAN", imageUrl: "/images/CSS3.png", },
    { title: "Interactivity with JavaScript",institutions:"UNIVERSITY OF MICHIGAN", imageUrl: "/images/Javascript.png", },
    { title: "HTML, CSS, and Javascript for Web Developers",institutions:"JOHNS HOPKINS UNIVERSITY", imageUrl: "/images/ensemble.png", },
    { title: "Introduction à la programmation orientée objet (en C++)",institutions:" École Polytechnique Fédérale de Lausanne", imageUrl: "/images/C++.png", },
    { title: "Introduction to Java and Object-Oriented Programming",institutions:"UNIVERSITY OF PENNSYLVANIA", imageUrl: "/images/Java2.png", },
    { title: "Programming for Everybody (Getting Started with Python)",institutions:"UNIVERSITY OF MICHIGAN", imageUrl: "/images/Python2.png", },
    { title: "React Basics",institutions:"Meta", imageUrl: "/images/ReactBasics.png", },
    { title: " The Unix Workbench",institutions:"JOHNS HOPKINS UNIVERSITY", imageUrl: "/images/Unix.png", },
    { title: "Virtual Networks in Azure",institutions:"WHIZLABS", imageUrl: "/images/Azure.png", },
    { title: "The Arduino Platform and C Programming",institutions:"University of California, Irvine", imageUrl: "/images/Arduino.png", },
    { title: "Software Engineering: Software Design and Project Management",institutions:"THE HONG KONG UNIVERSITY OF SCIENCE AND TECHNOLOGY", imageUrl: "/images/Software.png", },
    { title: "Impact Measurement & Management for the SDGs",institutions:"Duke UNIVERSITY", imageUrl: "/images/Impact.png", },
    { title: "Collaborate Effectively for Professional Success",institutions:"IBM", imageUrl: "/images/Collaborate.png", },
    { title: "Villes africaines: Environnement et enjeux de développement durable",institutions:" École Polytechnique Fédérale de Lausanne", imageUrl: "/images/Villes.png", },
    { title: "La recherche documentaire",institutions:"INSTITUT POLYTECHNIQUE DE PARIS", imageUrl: "/images/recherche.png", },
    // Ajoute autant de certificats que tu veux
  ];

  return (
    <div className="section-container py-10 md:py-16">
      <h4 className="text-xl md:text-4xl font-bold text-center text-blue-700 mb-10 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-700 after:mx-auto after:mt-4">
         Voici quelques-unes de mes certifications professionnelles.
      </h4>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            title={cert.title}
            institutions={cert.institutions}
            imageUrl={cert.imageUrl}
          />
        ))}
      </section>
    </div>
  );
};

export default CertificatesGrid;
