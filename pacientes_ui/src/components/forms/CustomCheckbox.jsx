import { Field } from "formik";
const CustomCheckbox = ({ name, value, text }) => {
  return (
    <label className="flex items-center gap-1 cursor-pointer select-none ">
      <Field
        type="checkbox"
        name={name}
        value={value}
        className="cursor-pointer"
      />
      {text}
    </label>
  );
};

export default CustomCheckbox;
