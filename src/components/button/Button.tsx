import { FC, memo, PropsWithChildren } from "react";
import styles from "./Button.module.css";


interface ButtonProps {
  onClick: any;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({onClick, children}) => {
  return (
    <button className={styles.button} onClick={onClick}>{children}</button>
  )
}

export default memo(Button);
