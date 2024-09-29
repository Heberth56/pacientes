const ButtonNavigate = ({ disabled, children, ...props }) => {
  return (
    <button
      className="disabled:text-gray-500 text-xl"
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonNavigate;
