import { FC, memo } from "react";
import styles from "./FavoriteGoodsWidget.module.css";


const FavoriteGoodsWidget: FC = () => {
  return (
    <div className={styles.img}></div>
  )
}

export default memo(FavoriteGoodsWidget);
