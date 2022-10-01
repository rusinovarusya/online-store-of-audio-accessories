import { FC, memo } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav1.module.css";


const Nav1: FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}><a className={styles.link} href="#">Избранное</a></li>
        <Link to={"/shopping-cart"}><li className={styles.item}><a className={styles.link} href="#">Корзина</a></li></Link>
        <li className={styles.item}><a className={styles.link} href="#">Контакты</a></li>
      </ul>
      <ul></ul>
    </nav>
  )
}

export default memo(Nav1);
