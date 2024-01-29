import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <Sidebar>{children}</Sidebar>;
};

export default Layout;
