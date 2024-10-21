import Link from "next/link";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { NavbarProps } from "@/types/navbar";
import Hamburger from "../Hamburger";

const Navbar: React.FC<NavbarProps> = ({ active, onClick }: NavbarProps) => {
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

  return (
    <nav className={styles.nav}>
      <h1>
        <Link href="/">Roozyroo</Link>
      </h1>
      <Hamburger active={active} onClick={onClick} />
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
