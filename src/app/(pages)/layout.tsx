import Drawer from "@/components/Drawer";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Drawer myClasses="md:drawer-open">
      <Navbar myClasses="md:hidden" />
      <main className="min-h-[calc(100vh-371px)] flex w-full items-center justify-center">{children}</main>
      <Footer />
    </Drawer>
  );
};

export default Layout;
