import { useState, useEffect } from "react";
import { navItems } from "../../utils/navItems";
import logoImg from "../../assets/images/logo.png";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsSticky(true);
      else setIsSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="w-full bg-white md:bg-transparent fixed">
      <nav
        className={`py-4 lg:px-14 px-4${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-200"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href="#"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={logoImg}
              alt="Imagen no encontrada"
              className="w-10 inline-block items-center"
            />
            <span className="bg-landing text-base text-center">
              Laboratorio Clínico <br />
              Virgen de Cotoca
            </span>
          </a>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map((elem, index) => (
              <Link
                spy={true}
                smooth={true}
                offset={-100}
                to={elem.path}
                key={index}
                className="block text-base text-textGray hover:text-purple-800 font-medium cursor-pointer"
              >
                {elem.link}
              </Link>
            ))}
          </ul>
          <div className="space-x-12 hidden lg:flex items-center">
            <a href="/login" className="bg-btn-landing">
              Login
            </a>
          </div>

          <div className="md:hidden">
            <button
              className="focus:outline-none focus:text-gray-500 text-neutralDGray"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`space-y-4 px-4 py-2 mt-16 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"
          }`}
        >
          {navItems.map((elem, index) => (
            <Link
              spy={true}
              smooth={true}
              offset={-100}
              to={elem.path}
              key={index}
              className="block text-base text-white hover:text-brandPrimary first:font-medium"
            >
              {elem.link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
