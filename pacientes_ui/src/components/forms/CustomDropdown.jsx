import { Field, ErrorMessage } from "formik";

const CustomDropdown = ({
  title,
  name,
  disabled = false,
  required = true,
  children,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-blue-950 font-semibold">
        {title}
        {required && <span className="text-red-500 font-medium"> *</span>}
      </label>
      <Field
        as="select"
        name={name}
        disabled={disabled}
        className="px-4 text-lg py-3 rounded-lg outline-none border-2 border-[#F3F4F6]"
      >
        {children}
      </Field>
      <div className="h-5">
        <ErrorMessage name={name}>
          {(msg) => <small className="text-red-500">{msg}</small>}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default CustomDropdown;
