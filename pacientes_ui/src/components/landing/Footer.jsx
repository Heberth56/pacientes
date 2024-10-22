import logoImg from "../../assets/images/logo.png";
const Footer = () => {
  const items = [
    { id: 1, title: "Sobre nosotros" },
    { id: 2, title: "Privacidad" },
    { id: 3, title: "Licencia" },
    { id: 4, title: "Contactos" },
  ];
  return (
    <footer className="rounded-lg shadow bg-gradient-to-r from-purple-700 via-violet-800  to-fuchsia-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logoImg} className="h-8" alt="lab Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Laboratorio
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            {items.map((elem) => (
              <li key={elem.id}>
                <a href="#" className="hover:underline me-4 md:me-6">
                  {elem.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white sm:text-center">
          © 2024-2025{" "}
          <a href="#" className="hover:underline">
            Laboratorio™
          </a>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
