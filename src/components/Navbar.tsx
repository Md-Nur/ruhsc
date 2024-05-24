import Image from "next/image";
import Navigation from "./Navigation";
import { MdOutlineMenuOpen } from "react-icons/md";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";
import defaultAvatar from "@/assets/defaultAvatar.jpg";

const Navbar = ({ myClasses }: { myClasses: string }) => {
  return (
    <nav className="navbar z-20 sticky top-0 bg-base-100">
      <div className="navbar-start">
        <label
          htmlFor="my-drawer"
          className={`px-5 cursor-pointer ${myClasses}`}
        >
          <MdOutlineMenuOpen className="w-5 h-5 text-base-content" />
        </label>
        <Link className={`px-3 ${myClasses}`} href="/">
          <Image src={logo} alt="Logo" height={40} />
        </Link>
      </div>
      {/* <div className="navbar-center hidden lg:flex w-9/12">
        <Navigation classes="menu menu-horizontal px-2 flex flex-wrap items-center justify-center" />
      </div> */}
      <div className="navbar-end space-x-4">
        <label className="flex cursor-pointer gap-2 items-center">
          <FaSun />
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller"
          />
          <FaMoon />
        </label>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image src={defaultAvatar} alt="Logo" height={50} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
