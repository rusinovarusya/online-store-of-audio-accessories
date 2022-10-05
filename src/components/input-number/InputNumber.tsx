import { FC, memo, PropsWithChildren, useState } from "react";
import Button from "../button/Button";
import styles from "./InputNumber.module.css";
import Minus from "../minus/Minus";
import Plus from "../plus/Plus";


interface InputNumberProps {}

const InputNumber: FC<PropsWithChildren<InputNumberProps>> = () => {

  const [count, setCount] = useState(1);

    return (
      <div className={styles.container}>
        <Button onClick={() => { 
          if (count > 0) {
            setCount(count - 1)
          }
        }}>
          <Minus />
        </Button>
        <div className={styles.number}>
          {count}
        </div>
        <Button onClick={() => setCount(count + 1)}>
          <Plus />
        </Button>
      </div>
    )
  }

export default memo(InputNumber);
