import { FC, memo, PropsWithChildren } from "react";
import styles from "./WidgetsContainer.module.css";


const WidgetsContainer: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.container}>{children}</div>
  );
}

export default memo(WidgetsContainer);
