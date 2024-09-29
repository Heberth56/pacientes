const Thead = ({ data }) => {
  return (
    <thead className="bg-sky-950 text-white">
      <tr>
        {data.map((elem, index) => (
          <th className="py-2 px-2 text-left border-b" key={index}>
            {elem}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
