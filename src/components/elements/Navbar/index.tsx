import Link from "next/link";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import MenuIcon from "../MenuIcon";
import CloseIcon from "../CloseIcon";

const Navbar = () => {
  const { pathname } = useRouter();

  const menus = [
    {
      url: "/",
      name: "Home",
    },
    {
      url: "/projects",
      name: "Projects",
    },
    {
      url: "/posts",
      name: "Post",
    },
  ];

  const [activeMenu, setActiveMenu] = useState(false);

  const handleClickMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <nav className={styles.nav}>
      <h1>Roozyroo</h1>
      <div className={styles.hamburger} onClick={handleClickMenu}>
        {activeMenu ? <CloseIcon /> : <MenuIcon />}
      </div>
      {/* <div
        className={`${
          activeMenu ? styles.listMenuMobileActive : styles.listMenuMobile
        }`}
      >
        <ul>
          <li>asd</li>
        </ul>
      </div> */}
      <ul>
        {menus.map((menu) => (
          <li key={menu.url}>
            <Link
              href={menu.url}
              className={`${menu.url == pathname ? "active" : ""}`}
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
