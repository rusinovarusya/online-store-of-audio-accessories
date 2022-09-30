import { FC, memo, PropsWithChildren } from "react";
import styles from "./GroupOfGoods.module.css";


interface GroupOfGoodsProps {
  title: string;
}

const GroupOfGoods: FC<PropsWithChildren<GroupOfGoodsProps>> = ({title, children}) => {
  return (
    <div className={styles.groupContainer}>
      <h2 className={styles.groupTitle}>{title}</h2>
      <div className={styles.group}>{children}</div>
    </div>
  )
}

export default memo(GroupOfGoods);
