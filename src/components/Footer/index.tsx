import styles from "./Footer.module.css"

const socialLinks: Array<{
  alt: string;
  logoPath: string;
  link: string;
}> = [
  {
    alt: "LinkedIn Logo",
    logoPath: "src/assets/icons/linkedin_icon.png",
    link: "https://www.linkedin.com/in/juliepassanezi/",
  },
  {
    alt: "Instagram Logo",
    logoPath: "src/assets/icons/instagram_icon.png",
    link: "https://www.instagram.com/jupm.art/",
  },
  {
    alt: "Twitter Logo",
    logoPath: "src/assets/icons/twitter_icon.png",
    link: "https://twitter.com/jupm_art",
  },
  {
    alt: "YouTube Logo",
    logoPath: "src/assets/icons/youtube_icon.png",
    link: "#",
  },
  {
    alt: "Discord Logo",
    logoPath: "src/assets/icons/discord_icon.png",
    link: "#",
  },
];

const Footer = () => {
  return(
    <footer className={styles.footerContainer}>
      <ul className={styles.social}>
        {
          socialLinks.map((social) => {
            return(
              <li key={social.alt}>
                <a 
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <img src={social.logoPath} alt={social.alt} />
                </a>
              </li>
            )
          })
        }
      </ul>
      <p>Copyright © 2024 Julie Passanezi</p>
      <p className={styles.dev}>Developed by <a href="https://github.com/renanabasilva" target="_blank" rel="noreferrer">Renan Aba</a></p>
    </footer>
  )
}

export default Footer;