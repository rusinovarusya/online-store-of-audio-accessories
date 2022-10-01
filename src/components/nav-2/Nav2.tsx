import { FC, memo, PropsWithChildren } from "react";
import styles from "./Nav2.module.css";


interface Nav2Props {}

const Nav2: FC<PropsWithChildren<Nav2Props>> = ({children}) => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}><a className={styles.link} href="#">Условия сервиса</a></li>
        <li className={styles.item}>{children}</li>
      </ul>
    </nav>
  )
}

export default memo(Nav2);
