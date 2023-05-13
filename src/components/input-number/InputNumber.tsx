import { FC, memo, PropsWithChildren, useState } from "react";
import Button from "../button/Button";
import styles from "./InputNumber.module.css";
import Minus from "../minus/Minus";
import Plus from "../plus/Plus";
import { AppDataContextModel, useAppDataContext } from "../../context/app-data.provider";


interface InputNumberProps {
  index: number;
  type: string;
}

const InputNumber: FC<PropsWithChildren<InputNumberProps>> = ({ index, type }) => {
  const { removeItem, increaseCount, decreaseCount, countItem } = useAppDataContext() as AppDataContextModel;

  const [count, setCount] = useState(countItem(index, type));

    return (
      <div className={styles.container}>
        <Button handleClick={() => { 
          if (count === 1) {
            removeItem(index, type);
          } else {
            setCount(count - 1);
            decreaseCount(index, type);
          }
        }}>
          <Minus />
        </Button>
        <div className={styles.number}>
          {count}
        </div>
        <Button handleClick={() => {
          setCount(count + 1);
          increaseCount(index, type);
          }}>
          <Plus />
        </Button>
      </div>
    );
  }

export default memo(InputNumber);
