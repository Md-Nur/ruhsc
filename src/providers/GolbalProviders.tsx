import { ReactNode } from "react";
import TanstackQueryClient from "./TanstackQueryClient";
import UserAuthProvider from "./UserAuthProvider";

const GolbalProviders = ({ children }: { children: ReactNode }) => {
  return (
    <TanstackQueryClient>
      <UserAuthProvider>{children}</UserAuthProvider>
    </TanstackQueryClient>
  );
};

export default GolbalProviders;
