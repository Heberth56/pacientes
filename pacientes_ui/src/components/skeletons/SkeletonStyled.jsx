import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonStyled = ({ cant, height = 41, dir = "rtl" }) => {
  return (
    <SkeletonTheme
      baseColor="#E1E2E4"
      highlightColor="#C5C5C5"
      height={height}
      borderRadius={7}
      direction={dir}
    >
      <Skeleton count={cant} className="mt-3" />
    </SkeletonTheme>
  );
};

export default SkeletonStyled;
