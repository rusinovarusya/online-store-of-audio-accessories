import { FC, memo } from "react";
import styles from "./SocialNetworks.module.css";


const SocialNetworks: FC = () => {
  return (
    <ul className={styles.socialNetworksList}>
      <li className={styles.socialNetworkItem}>
        <a href="" className={styles.link}></a>
      </li>
      <li className={styles.socialNetworkItem}>
        <a href="" className={styles.link}></a>
      </li>
      <li className={styles.socialNetworkItem}>
        <a href="" className={styles.link}></a>
      </li>
    </ul>
  );
}

export default memo(SocialNetworks);
