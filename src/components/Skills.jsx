import React from 'react';

const Tech = ({ imgSrc, name }) => (
  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-md hover:scale-105 transition transform duration-200">
    <img src={imgSrc} alt={name} className="w-16 h-16 mb-3 object-contain" />
    <p className="text-lg font-medium">{name}</p>
  </div>
);

const Skills = () => {
  const skills = [
    { imgSrc: "/images/html.2ba4fabc69a89a8f71e6.png", name: "HTML5" },
    { imgSrc: "/images/css69a82c2d9e45c933a9cb.png", name: "CSS3" },
    { imgSrc: "/images/javascript.1ccd6ef9bb1f9c84ef00.png", name: "JAVASCRIPT" },
    { imgSrc: "/images/angular-icon-seeklogo.png", name: "ANGULAR" },
    { imgSrc: "/images/react.0cf951a69d8e58f83f9d.png", name: "REACT" },
    { imgSrc: "/images/C.6a587e4f24852a1ca9d5.png", name: "C/C++/C#" },
    { imgSrc: "/images/Java.png", name: "JAVA" },
    { imgSrc: "/images/Spring.png", name: "SPRING" },
    { imgSrc: "/images/Python.png", name: "PYTHON" },
    { imgSrc: "/images/github.png", name: "GITHUB" },
    { imgSrc: "/images/Dotnet.c97470dd91ec398e6a3c.png", name: ".NET CORE" },
    { imgSrc: "/images/django.png", name: "DJANGO" },
    { imgSrc: "/images/shell.png", name: "SHELL SCRIPT" },
    { imgSrc: "/images/SQL.png", name: "SQL DATABASES" },
    { imgSrc: "/images/MongoDB.png", name: "MONGO DB" },
    { imgSrc: "/images/azure-icon.png", name: "AZURE" },
    { imgSrc: "/images/docker-mark-blue.png", name: "DOCKER" },
    { imgSrc: "/images/php.png", name: "PHP" },
    { imgSrc: "/images/Bootstrap.21c4b8805fff51b47615.png", name: "BOOTSTRAP" },
    { imgSrc: "/images/tailwind.e47ac876b8d4d0bba47a.png", name: "TAILWIND" },
  ];
  return (
    <div className="w-full min-h-screen bg-white px-4 py-10">
    <h4 className="text-xl md:text-4xl font-bold text-center text-blue-700 mb-10 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-700 after:mx-auto after:mt-4">
      Voici les technologies avec lesquelles j'ai travaillé
    </h4>
  
  <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {skills.map((skill, index) => (
      <Tech key={index} imgSrc={skill.imgSrc} name={skill.name} />
    ))}
  </section>
</div>

  );
};

export default Skills;
