import { useState } from "react";
import { X } from "lucide-react";

const CertificateCard = ({ title, institutions ,imageUrl }) => {
  const [hovered, setHovered] = useState(false);
  const [showImage, setShowImage] = useState(false)

  return (
    <div
      className="relative bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-md transition"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
        <div
        className="relative bg-cover bg-center rounded-lg overflow-hidden shadow hover:shadow-md transition aspect-[4/3]"
        style={{ backgroundImage: `url(${imageUrl})` }}>
        </div>

      {hovered && (
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center transition space-y-4 p-4">
          <p className="text-white text-center font-semibold text-xl">{title}</p>
          <p className="text-gray-300">{institutions}</p>
          <button
            onClick={() => setShowImage(true)}
            className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300"
          >
            Voir
          </button>
        </div>
      )}

      {showImage && (
  <div
    onClick={() => setShowImage(false)}
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-500 ease-in-out animate-fade-in"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative bg-white rounded-lg shadow-lg p-4 max-w-3xl w-full mx-4"
    >
      <button
        onClick={() => setShowImage(false)}
        className="absolute -top-4 -right-4 bg-white border border-gray-300 rounded-full p-1 text-gray-700 hover:text-black hover:bg-gray-100 transition"
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
      >
        <X className="w-5 h-5" />
      </button>

      <img
        src={imageUrl}
        alt={title}
        className="rounded-md w-full object-contain max-h-[80vh]"
      />
    </div>
  </div>
)}
    </div>
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
    <div className="max-w-6xl mx-auto p-4">
      <h4 className="text-xl md:text-4xl font-bold text-center text-blue-700 mb-10 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-700 after:mx-auto after:mt-4">
         Voici quelques-unes de mes certifications professionnelles.
      </h4>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
