import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";
import { useEffect, useState } from "react";

const pages: Array<{
  name: string;
  path?: string;
  submenu?: Array<{
    name: string;
    path: string;
  }>;
}> = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "storyboard",
    path: "/storyboard",
  },
  {
    name: "illustration",
    path: "/illustration",
  },
  {
    name: "animation",
    submenu: [
      {
        name: "characters",
        path: "/animation/characters",
      },
      {
        name: "backgrounds",
        path: "/animation/backgrounds",
      },
      {
        name: "props",
        path: "/animation/props",
      },
      {
        name: "animations",
        path: "/animation/animations",
      },
    ],
  },
  {
    name: "pixel art",
    path: "/pixel-art",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "about",
    path: "/about",
  },
];

const Menu = () => {
  const [showMenu, setShowMenu] = useState(
    window.innerWidth >= 768 ? true : false
  );
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (windowWidth > 768) {
        setShowMenu(true);
      } else if (windowWidth <= 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <>
      <button
        className={`material-symbols-rounded ${styles.burger} ${
          showMenu && windowWidth <= 768 ? styles.open : ""
        }`}
        type="button"
        onClick={() => {
          setShowMenu(!showMenu);
          setShowSubMenu(false);
        }}
      >
        {!showMenu ? "menu" : "close"}
      </button>
      <div
        className={showMenu && windowWidth <= 768 ? styles.menuOverlay : ""}
        onClick={() => setShowMenu(!showMenu)}
      >
        <nav
          className={`${styles.menu} ${showMenu && windowWidth <= 768 ? styles.open : ""}`}
          onClick={(e) => e.stopPropagation()}
          aria-hidden={showMenu}
        >
          <ul>
            {pages.map((page) => {
              if (page.submenu !== undefined) {
                return (
                  <div key={page.name}>
                    <div
                      tabIndex={0}
                      role="button"
                      className={`${styles.button} ${
                        showSubMenu && windowWidth <= 768 ? styles.open : ""
                      }`}
                      onClick={() => setShowSubMenu(!showSubMenu)}
                    >
                      {page.name}
                    </div>
                    <ul
                      className={`${styles.submenu} ${
                        showSubMenu && windowWidth <= 768 ? styles.open : ""
                      }`}
                    >
                      {page.submenu.map((item) => {
                        return (
                          <li key={item.name}>
                            <NavLink
                              to={item.path ? item.path : ""}
                              className={({ isActive }) =>
                                isActive ? styles.active : ""
                              }
                              onClick={() => setShowMenu(!showMenu)}
                            >
                              {item.name}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              }
              return (
                <li key={page.name}>
                  <NavLink
                    to={page.path ? page.path : ""}
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                    key={page.name}
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    {page.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
