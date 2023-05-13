import { FC, memo, PropsWithChildren } from "react";


const LinksContainer: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>{children}</div>
  );
}

export default memo(LinksContainer);
