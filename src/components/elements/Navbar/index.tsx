import Link from "next/link";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1>Roozyroo</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
          </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/posts">Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
