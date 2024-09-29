import FormContent from "../../layout/FormContent";
import SkeletonStyled from "./SkeletonStyled";

const FormSkeleton = () => {
  return (
    <FormContent title="Cargando...">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <SkeletonStyled cant={6} />
        </div>
        <div className="md:w-1/2">
          <SkeletonStyled cant={5} dir="ltr" />
        </div>
      </div>
    </FormContent>
  );
};

export default FormSkeleton;
