import { blogs } from "../../utils/blogs";
const Blog = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGray font-semibold mb-4">
          Clínica de alta versatilidad
        </h2>
        <p className=" text-sm text-neutralGrey mb-8 mx-auto">
          En nuestra Clínica de Alta Versatilidad, ofrecemos una amplia gama de
          servicios médicos adaptados a las necesidades específicas de cada
          paciente. Nuestro equipo de profesionales altamente capacitados se
          dedica a proporcionar atención personalizada y de calidad en diversas
          especialidades. Nos enorgullecemos de nuestra capacidad para
          adaptarnos y responder a los desafíos únicos de cada caso,
          garantizando tratamientos eficaces y una experiencia de atención
          integral y humana.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((elem) => (
          <div key={elem.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={elem.image}
              alt="image not found"
              className="hover:scale-95 transition-all duration-300 rounded-sm shadow-md"
            />
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3 className="text-center font-bold">{elem.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
