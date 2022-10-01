import { FC, memo, PropsWithChildren } from "react";
import styles from "./Widget.module.css";


interface WidgetProps {
  count: number;
  //icon: string;
}

const Widget: FC<PropsWithChildren<WidgetProps>> = ({count, children}) => {
  return (
    <button className={styles.widget}>
      {children}
      <div className={styles.count}>{count}</div>
    </button>
  )
}

export default memo(Widget);
