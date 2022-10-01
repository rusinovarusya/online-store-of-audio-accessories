import { FC, memo, PropsWithChildren } from "react";
import styles from "./WidgetsContainer.module.css";


interface WidgetsContainerProps {}

const WidgetsContainer: FC<PropsWithChildren<WidgetsContainerProps>> = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default memo(WidgetsContainer);
