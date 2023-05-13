import { FC, memo } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../language-switcher/LanguageSwitcher";
import Logo from "../logo/Logo";
import Nav1 from "../nav-1/Nav1";
import Nav2 from "../nav-2/Nav2";
import SocialNetworks from "../social-networks/SocialNetworks";
import styles from "./Footer.module.css";


const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Link to={"/"}>
        <Logo />
      </Link>
      <Nav1 />
      <Nav2>
        <LanguageSwitcher />
      </Nav2>
      <SocialNetworks />
    </footer>
  );
}

export default memo(Footer);