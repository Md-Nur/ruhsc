"use client";
import Image from "next/image";
import { MdOutlineMenuOpen } from "react-icons/md";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";
import defaultAvatar from "@/assets/defaultAvatar.jpg";
import useUserAuth from "@/contexts/userAuth";
import Logout from "./Logout";

const Navbar = ({ myClasses }: { myClasses: string }) => {
  const { loading, userAuth } = useUserAuth();
  return (
    <nav className="navbar z-50 sticky top-0 bg-base-200">
      <div className="navbar-start">
        <label
          htmlFor="my-drawer"
          className={`px-5 cursor-pointer ${myClasses}`}
        >
          <MdOutlineMenuOpen className="w-5 h-5 text-base-content" />
        </label>
        <Link className={`px-3 ${myClasses}`} href="/">
          <Image
            src={logo}
            alt="Logo"
            height={40}
            className="bg-white rounded"
          />
        </Link>
      </div>
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
              <Image
                src={userAuth?.avatar || defaultAvatar}
                alt="Logo"
                height={100}
                width={100}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {!loading && userAuth?.name ? (
              <>
                <li>
                  <Link href="/admin">Admin</Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <Logout />
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/join-us">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
