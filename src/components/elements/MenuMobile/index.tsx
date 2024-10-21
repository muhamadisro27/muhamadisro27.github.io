import Link from "next/link";
import styles from "./index.module.scss";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

interface setStateFC {
  setActive: (prevState: boolean) => void;
}

const MenuMobile: React.FC<setStateFC> = ({ setActive }: setStateFC) => {
  const menuWrap = useRef<HTMLDivElement | null>(null);
  const containerWrap = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { current: menu } = menuWrap;
    const { current: container } = containerWrap;

    if (container && menu) {
      container.style.height = "0px";
      menu.style.transform = "translateY(-100px)";
      menu.style.opacity = "0";

      setTimeout(() => {
        container.style.height = "100vh";
      }, 100);
      setTimeout(() => {
        menu.style.opacity = "1";
        menu.style.transform = "translateY(0px)";
      }, 300);

      return () => {
        container.style.height = "0px";
        menu.style.opacity = "0";
        menu.style.transform = "translateY(0px)";
      };
    }
  }, []);

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

  const { push } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();

    setActive(false);

    push(url);
  };

  return (
    <div className={styles.container} ref={containerWrap}>
      <div className={styles.menuWrapper} ref={menuWrap}>
        {menus.map((menu) => (
          <Link href={menu.url} onClick={(e) => handleClick(e, menu.url)}>
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuMobile;
