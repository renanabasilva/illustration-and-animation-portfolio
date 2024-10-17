import styles from "./Footer.module.css"

const Footer = () => {
  return(
    <footer className={styles.footerContainer}>
      <ul className={styles.social}>
            <li><a href="https://www.linkedin.com/in/juliepassanezi/" target="_blank" rel="noreferrer"><img src="src/assets/icons/linkedin_icon.png" alt="LinkedIn Logo"/></a></li>
            <li><a href="https://www.instagram.com/jupm.art/" target="_blank" rel="noreferrer"><img src="src/assets/icons/instagram_icon.png" alt="Instagram Logo" /></a></li>
            <li><a href="https://twitter.com/jupm_art" target="_blank" rel="noreferrer"><img src="src/assets/icons/twitter_icon.png" alt="Twitter Logo" /></a></li>
            <li><a href="#" target="_blank" rel="noreferrer"><img src="src/assets/icons/youtube_icon.png" alt="YouTube Logo"/></a></li>
            <li><a href="#" target="_blank" rel="noreferrer"><img src="src/assets/icons/discord_icon.png" alt="Discord Logo"/></a></li>
        </ul>
        <p>Copyright © 2024 Julie Passanezi</p>
        <p className={styles.dev}>Developed by <a href="https://github.com/renanabasilva" target="_blank" rel="noreferrer">Renan Aba</a></p>
    </footer>
  )
}

export default Footer;