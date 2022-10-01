import { FC, memo, PropsWithChildren } from "react";
import styles from "./Rating.module.css";


interface RatingProps {
  rating: number;
}

const Rating: FC<PropsWithChildren<RatingProps>> = ({rating}) => {
  return (
    <div className={styles.ratingContainer}>
      <div className={styles.star}></div>
      {rating}
    </div>
  )
}

export default memo(Rating);
