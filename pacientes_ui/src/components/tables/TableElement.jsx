const TableElement = ({ children, ...props }) => {
  return (
    <td className="py-2 px-4 border-b" {...props}>
      {children}
    </td>
  );
};

export default TableElement;
