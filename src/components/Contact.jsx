import React from 'react';
import {
  Mail, Github, Linkedin, Phone, Facebook, Instagram, MessageCircle
} from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center bg-white px-4 sm:px-6 py-12"
    >
      <div className="w-full max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
          <h4 className="text-xl md:text-4xl font-bold text-center text-blue-700 mb-10 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-700 after:mx-auto after:mt-4">
            Contactez-moi
          </h4>
        <p className="mb-8 text-gray-600 text-center">
          N’hésitez pas à me contacter via les réseaux sociaux, par téléphone ou par email :
        </p>

        <ul className="space-y-5 text-gray-700">

          <li className="flex flex-col md:flex-row md:items-center md:justify-between hover:bg-gray-100 px-4 py-3 rounded-lg transition">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Téléphone :</span>
            </div>
            <a
              href="tel:+212634798064"
              className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition"
            >
              +212 6 34 79 80 64
            </a>
          </li>

          <li className="flex flex-col md:flex-row md:items-center md:justify-between hover:bg-gray-100 px-4 py-3 rounded-lg transition">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Téléphone :</span>
            </div>
            <a
              href="tel:+212752919451"
              className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition"
            >
              +212 7 52 91 94 51
            </a>
          </li>

          <li className="flex flex-col md:flex-row md:items-center md:justify-between hover:bg-gray-100 px-4 py-3 rounded-lg transition">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Email :</span>
            </div>
            <a
              href="mailto:mhtamine8@gmail.com"
              className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition"
            >
              mhtamine8@gmail.com.com
            </a>
          </li>

          <li className="flex flex-col md:flex-row md:items-center md:justify-between hover:bg-gray-100 px-4 py-3 rounded-lg transition">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <Linkedin className="w-5 h-5 text-blue-700" />
              <span className="font-semibold">LinkedIn :</span>
            </div>
            <a
              href="https://www.linkedin.com/in/mahamat-amine-toloba-450242278/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition"
            >
              linkedin.com/in/AMINETOLOBA
            </a>
          </li>

          <li className="flex flex-col md:flex-row md:items-center md:justify-between hover:bg-gray-100 px-4 py-3 rounded-lg transition">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <MessageCircle className="w-5 h-5 text-green-500" />
              <span className="font-semibold">WhatsApp :</span>
            </div>
            <a
              href="https://wa.me/212634798064"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-medium hover:text-green-800 hover:underline transition"
            >
              Message WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
