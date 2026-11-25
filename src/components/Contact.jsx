
import {
  Mail,
  Linkedin,
  Phone,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      label: 'Téléphone',
      value: '+212 6 34 79 80 64',
      href: 'tel:+212634798064',
      Icon: Phone,
      color: 'text-blue-600',
    },
    {
      label: 'Téléphone',
      value: '+212 7 52 91 94 51',
      href: 'tel:+212752919451',
      Icon: Phone,
      color: 'text-blue-600',
    },
    {
      label: 'Email',
      value: 'mhtamine8@gmail.com',
      href: 'mailto:mhtamine8@gmail.com',
      Icon: Mail,
      color: 'text-blue-600',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/AMINETOLOBA',
      href: 'https://www.linkedin.com/in/mahamat-amine-toloba-450242278/',
      Icon: Linkedin,
      color: 'text-blue-700',
    },
    {
      label: 'WhatsApp',
      value: 'Message WhatsApp',
      href: 'https://wa.me/212634798064',
      Icon: MessageCircle,
      color: 'text-green-600',
    },
  ];

  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col justify-center bg-white px-4 py-12 sm:px-6"
    >
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-5 shadow-xl transition hover:shadow-2xl sm:p-8">
        <h4 className="relative mb-8 text-center text-2xl font-bold text-blue-700 after:mx-auto after:mt-4 after:block after:h-1 after:w-24 after:bg-blue-700 md:text-4xl">
          Contactez-moi
        </h4>

        <p className="mb-8 text-center leading-relaxed text-gray-600">
          N’hésitez pas à me contacter via les réseaux sociaux,
          par téléphone ou par email :
        </p>

        <ul className="space-y-3">
          {contacts.map(({ label, value, href, Icon, color }, index) => (
            <li
              key={index}
              className="flex min-w-0 flex-col gap-2 rounded-lg px-3 py-4 transition hover:bg-gray-100 sm:px-4 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-2">
                <Icon className={`h-5 w-5 shrink-0 ${color}`} />
                <span className="font-semibold text-gray-800">
                  {label} :
                </span>
              </div>

              <a
                href={href}
                target={href.startsWith('https://') ? '_blank' : undefined}
                rel={href.startsWith('https://') ? 'noopener noreferrer' : undefined}
                className={`break-all text-sm font-medium transition hover:underline sm:text-base ${
                  label === 'WhatsApp' ? 'text-green-600 hover:text-green-800' : 'text-blue-600 hover:text-blue-800'
                }`}
              >
                {value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
