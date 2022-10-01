import { FC, memo } from "react";
import styles from "./LanguageSwitcher.module.css";


const LanguageSwitcher: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.language}></div>
      <input type="radio" className={styles.input} name="language" id="ru" value="ru" checked />
      <label htmlFor="ru" className={styles.label}>Рус</label>
      <input type="radio" className={styles.input} name="language" id="en" value="en" />
      <label htmlFor="en" className={styles.label}>Eng</label>
    </div>
  )
}

export default memo(LanguageSwitcher);
