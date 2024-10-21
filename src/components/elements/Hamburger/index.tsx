import { NavbarProps } from "@/types/navbar";
import styles from "./index.module.scss";

const Hamburger = ({ active, onClick }: NavbarProps) => {
  return (
    <div className={styles.lineWrapper} onClick={onClick}>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <span
            key={index}
            className={`${styles.line}`}
            data-active={`${active ? true : false}`}
          ></span>
        ))}
    </div>
  );
};

export default Hamburger;
