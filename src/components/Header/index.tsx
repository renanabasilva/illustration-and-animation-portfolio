import styles from "./Header.module.css"

const Header = () => {
  return(
    <header>
      <div className={styles.banner}>
        <h1>Julie Passanezi</h1>
        {/* <h1><img src="" alt="Julie Passanezi" /></h1> */}
      </div>
    </header>
  )
}

export default Header;