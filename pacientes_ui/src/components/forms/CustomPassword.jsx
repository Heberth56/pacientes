import { Field, ErrorMessage } from "formik";
import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";
import { useState } from "react";

const CustomPassword = ({
  title,
  name,
  placeholder = "",
  disabled = false,
  required,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-blue-950 font-semibold">{title}</label>
      <div className="text-xl rounded-2xl overflow-hidden pr-4 flex border-2 bg-white border-[#F3F4F6] items-center gap-3">
        <Field
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          type={showPassword ? "text" : "password"}
          autoComplete="off"
          className="outline-none w-full p-4"
          required={required}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <LiaEyeSlashSolid className="h-7 w-7 text-gray-500" />
          ) : (
            <LiaEyeSolid className="h-7 w-7 text-gray-500" />
          )}
        </button>
      </div>
      <div className="h-5">
        <ErrorMessage name={name}>
          {(msg) => <small className="text-red-500">{msg}</small>}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default CustomPassword;
