const FormContent = ({ title, children }) => {
  return (
    <fieldset className="shadow-xl p-5 bg-slate-50 rounded-md">
      <legend className="text-center text-2xl font-medium text-white w-full bg-sky-950 p-2 rounded-md">
        {title}
      </legend>
      {children}
    </fieldset>
  );
};

export default FormContent;
