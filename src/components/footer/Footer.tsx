import { FC, memo, PropsWithChildren } from "react";
import styles from "./Footer.module.css";


interface FooterProps {}

const Footer: FC<PropsWithChildren<FooterProps>> = ({children}) => {
  return (
    <footer className={styles.footer}>{children}</footer>
  )
}

export default memo(Footer);