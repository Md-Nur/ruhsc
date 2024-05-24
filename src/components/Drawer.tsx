import { ReactNode } from "react";
import Navigation from "./Navigation";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const Drawer = ({
  children,
  myClasses,
}: {
  children: ReactNode;
  myClasses: string;
}) => {
  return (
    <div className={`drawer ${myClasses}`}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side z-40">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <Navigation classes="menu p-4 min-h-[calc(100vh-200px)] h-full bg-base-200 w-56 text-base-content" />
      </div>
    </div>
  );
};

export default Drawer;
