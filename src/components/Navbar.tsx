import Image from "next/image";
import Navigation from "./Navigation";
import { MdOutlineMenuOpen } from "react-icons/md";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 z-10 sticky top-0">
      <div className="navbar-start">
        <label htmlFor="my-drawer" className="btn drawer-button lg:hidden">
          <MdOutlineMenuOpen />
        </label>
        <Link className="px-3" href="/">
          <Image src={logo} alt="Logo" height={40} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Navigation classes="menu menu-horizontal px-1" />
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </nav>
  );
};

export default Navbar;
