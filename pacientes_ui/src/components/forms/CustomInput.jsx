import { Field, ErrorMessage } from "formik";

const CustomInput = ({
  title,
  name,
  type = "text",
  placeholder = "",
  disabled = false,
  required = true,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-blue-950 font-semibold">
        {title}{" "}
        {required && <span className="text-red-500 font-medium">*</span>}
      </label>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className="px-4 text-lg py-3 rounded-lg outline-none border-2 border-[#F3F4F6]"
      />
      <div className="h-5 flex items-start">
        <ErrorMessage name={name}>
          {(msg) => <small className="text-red-500">{msg}</small>}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default CustomInput;
