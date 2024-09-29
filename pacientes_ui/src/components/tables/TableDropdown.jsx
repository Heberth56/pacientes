//
const TableDropdown = ({ table }) => {
  return (
    <div>
      <select
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
        className="h-[40px] px-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none"
      >
        <option value="10">10 Items</option>
        <option value="20">20 Items</option>
        <option value="50">50 Items</option>
      </select>
    </div>
  );
};

export default TableDropdown;
