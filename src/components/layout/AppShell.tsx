import { useEffect, useState } from "react";
import Navbar from "../elements/Navbar";

interface AppShellInterface {
  children: React.ReactNode;
}

const AppShell: React.FC<AppShellInterface> = ({
  children,
}: AppShellInterface) => {
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    if (activeMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeMenu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        document.body.style.overflow = "auto";
        setActiveMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeMenu]);

  const handleClickMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <>
      <Navbar active={activeMenu} onClick={handleClickMenu} />
      {/* <MenuMobile /> */}
      {children}
    </>
  );
};

export default AppShell;
