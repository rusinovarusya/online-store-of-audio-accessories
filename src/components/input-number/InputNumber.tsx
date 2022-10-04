import { FC, memo, PropsWithChildren } from "react";
import Button from "../button/Button";
import styles from "./InputNumber.module.css";
import Minus from "../minus/Minus";
import Plus from "../plus/Plus";


interface InputNumberProps {}

const InputNumber: FC<PropsWithChildren<InputNumberProps>> = ({children}) => {
    return (
      <div className={styles.container}>
        <Button><Minus /></Button>
        <div className={styles.number}>0</div>
        <Button><Plus /></Button>
      </div>
    )
  }

export default memo(InputNumber);
