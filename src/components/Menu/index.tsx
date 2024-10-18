import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css"

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
    ]
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
  return(
    <nav className="menu">
      {pages.map((page) => {
        if (page.submenu !== undefined) {
          return (
            <div key={page.name}>
              <div tabIndex={0} role="button">
                {page.name}
              </div>
              <ul>
                {page.submenu.map((item) =>{
                  return (
                    <li key={item.name}>
                      <NavLink
                        to={item.path ? item.path : ""} 
                        className={({ isActive }) => (isActive ? styles.active : "")}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        }
        return (
          <NavLink 
            to={page.path ? page.path : ""} 
            className={({ isActive }) => (isActive ? styles.active : "")}
            key={page.name}
          >
            {page.name}
          </NavLink>
        )
      })}
    </nav>
  )
}

export default Menu;