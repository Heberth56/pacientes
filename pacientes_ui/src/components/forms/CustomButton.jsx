const CustomButton = ({ bg = "bg-violet-950", children, ...props }) => {
  return (
    <button
      className={`text-white py-3 text-xl font-medium rounded-lg shadow-primary shadow-lg w-full mt-5 ${bg} hover:opacity-95`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
