import { FC, memo } from "react";
import styles from "./Nav1.module.css";


const Nav1: FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}><a className={styles.link} href="#">Избранное</a></li>
        <li className={styles.item}><a className={styles.link} href="#">Корзина</a></li>
        <li className={styles.item}><a className={styles.link} href="#">Контакты</a></li>
      </ul>
      <ul></ul>
    </nav>
  )
}

export default memo(Nav1);
