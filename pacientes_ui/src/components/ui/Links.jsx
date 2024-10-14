import { Link } from "react-router-dom";

const Links = ({ link, active = false, children, ...props }) => {
  return (
    <Link to={link} {...props}>
      <li
        className={`mt-1 p-3 hover:bg-gray-300 hover:bg-opacity-30 ${
          active ? "bg-gray-300 bg-opacity-30" : ""
        }`}
      >
        <div className="flex items-center gap-1">{children}</div>
      </li>
    </Link>
  );
};

export default Links;
