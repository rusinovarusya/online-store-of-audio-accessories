import { FC, memo, PropsWithChildren } from "react";
import styles from "./LinksContainer.module.css";


interface LinksContainerProps {}

const LinksContainer: FC<PropsWithChildren<LinksContainerProps>> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default memo(LinksContainer);
