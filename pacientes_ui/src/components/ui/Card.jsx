const Card = ({ titulo, descripcion }) => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-xs my-4">
      <div className="flex items-center w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://via.placeholder.com/150"
          alt="Imagen del card"
        />
      </div>
      <div className="w-1/2 p-4">
        <h1 className="text-gray-900 font-bold">{titulo}</h1>
        <p className="mt-2 text-gray-600 text-sm">{descripcion}</p>
        <button className="mt-4 py-2 px-4 bg-blue-500 text-white text-sm font-semibold rounded">
          Ver más
        </button>
      </div>
    </div>
  );
};

export default Card;
