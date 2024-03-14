import Drawer from "@/components/Drawer";
import Navbar from "@/components/Navbar";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Drawer myClasses="md:drawer-open">
      <Navbar myClasses="md:hidden" />
      {children}
    </Drawer>
  );
};

export default Layout;
