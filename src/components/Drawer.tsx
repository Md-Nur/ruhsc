import { ReactNode } from "react";
import Navigation from "./Navigation";

const Drawer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Navigation classes="menu p-4 mt-14 w-56 min-h-full bg-base-200 text-base-content" />
      </div>
    </div>
  );
};

export default Drawer;
