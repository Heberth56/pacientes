import { blogs } from "../../utils/blogs";
const Blog = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGray font-semibold mb-4">
          Clínica de alta versatilidad
        </h2>
        <p className=" text-sm text-neutralGrey mb-8 mx-auto">
          Nuestra Misión/Vision/Objetivos
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
            <div className="text-center px-4 py-8 bg-white bg-opacity-75 shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3 className="text-center font-bold">{elem.title}</h3>
              <p className="text-center font-normal text-sm">
                {elem.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
