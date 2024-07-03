"use client";
import Loading from "@/components/Loading";
import useUserAuth from "@/contexts/userAuth";
import Link from "next/link";
import { ReactNode } from "react";
import { MdMenu } from "react-icons/md";

const Routes = () => {
  return (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/admin">Profile</Link>
      </li>
      <li>
        <Link href="/admin/add-content">Add Content</Link>
      </li>
    </>
  );
};

const layout = ({ children }: { children: ReactNode }) => {
  const { loading, userAuth } = useUserAuth();
  if (loading)
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <Loading />
      </div>
    );
  if (!userAuth) return <div>Unauthorized</div>;
  return (
    <div className="drawer">
      <input id="admin-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="admin-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <MdMenu />
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">RUHSC</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <Routes />
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <main className="min-h-[calc(100vh-371px)] flex w-full items-center justify-center">
          {children}
        </main>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="admin-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <Routes />
        </ul>
      </div>
    </div>
  );
};

export default layout;
