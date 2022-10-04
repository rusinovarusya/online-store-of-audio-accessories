import { FC, memo, PropsWithChildren } from "react";
import styles from "./Button.module.css";


interface ButtonProps {}

const Button: FC<PropsWithChildren<ButtonProps>> = ({children}) => {
  return <button className={styles.button}>{children}</button>
}

export default memo(Button);
