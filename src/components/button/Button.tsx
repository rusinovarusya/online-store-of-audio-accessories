import { FC, memo, PropsWithChildren } from "react";
import styles from "./Button.module.css";


interface ButtonProps {
  handleClick: () => void;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ handleClick, children }) => {
  return (
    <button className={styles.button} onClick={handleClick}>{children}</button>
  );
}

export default memo(Button);
