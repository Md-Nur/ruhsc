import { ReactNode } from "react";

const GlobalContext = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default GlobalContext;
