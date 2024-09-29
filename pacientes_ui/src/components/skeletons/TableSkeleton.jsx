import SkeletonStyled from "./SkeletonStyled";

const TableSkeleton = ({ columns = 5 }) => {
  return (
    <tr>
      {Array.from({ length: columns }).map((_, index) => (
        <td className="px-2" key={index}>
          <SkeletonStyled cant={7} height={14} />
        </td>
      ))}
    </tr>
  );
};

export default TableSkeleton;
