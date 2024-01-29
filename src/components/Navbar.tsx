import Image from "next/image";
import Navigation from "./Navigation";
import { MdOutlineMenuOpen } from "react-icons/md";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 z-20 sticky top-0">
      <div className="navbar-start">
        <label htmlFor="my-drawer" className="btn drawer-button lg:hidden">
          <MdOutlineMenuOpen />
        </label>
        <Link className="px-3" href="/">
          <Image src={logo} alt="Logo" height={40} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex w-9/12">
        <Navigation classes="menu menu-horizontal px-2 flex flex-wrap items-center justify-center" />
      </div>
      <div className="navbar-end space-x-4">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="theme-controller" value="nord" />
          {/* sun icon */}
          <FaSun className="swap-on fill-current w-7 h-7" />
          {/* moon icon */}
          <FaMoon className="swap-off fill-current w-7 h-7" />
        </label>
        <div className="avatar">
          <div className="w-12 mask mask-circle">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
