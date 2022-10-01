import { FC, memo } from "react";
import styles from "./SocialNetworks.module.css";


const SocialNetworks: FC = () => {
  return (
    <ul className={styles.socialNetworksList}>
      <li className={styles.socialNetworkItem}><a href="#" className={styles.link} id="vk"></a></li>
      <li className={styles.socialNetworkItem}><a href="#" className={styles.link} id="telegram"></a></li>
      <li className={styles.socialNetworkItem}><a href="#" className={styles.link} id="whatsapp"></a></li>
    </ul>
  )
}

export default memo(SocialNetworks);
