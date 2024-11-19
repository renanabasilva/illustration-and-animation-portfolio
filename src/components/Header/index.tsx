import styles from "./Header.module.css";
import Menu from "../Menu";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <h1>Julie Passanezi</h1>
        {/* <h1><img src="" alt="Julie Passanezi" /></h1> */}
      </div>
      <Menu />
    </header>
  );
};

export default Header;
