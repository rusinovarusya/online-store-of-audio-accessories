import { FC, memo, PropsWithChildren } from "react";


interface MainProps {}

const Main: FC<PropsWithChildren<MainProps>> = ({children}) => {
  return (
    <main>{children}</main>
  )
}

export default memo(Main);
