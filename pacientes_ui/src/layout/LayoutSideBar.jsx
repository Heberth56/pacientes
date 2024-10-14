import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import SideBar from "../components/ui/SideBar";

const LayoutSidebar = () => {
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenu(true);
      else setMenu(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Navbar menu={menu} setMenu={setMenu} />
      <SideBar menu={menu} />
      <div
        className={`px-6 py-6 ${menu && "ml-64"} transition-all duration-300`}
      >
        <Outlet />
      </div>
    </>
  );
};

export default LayoutSidebar;
