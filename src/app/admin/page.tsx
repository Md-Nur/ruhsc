"use client";
import useUserAuth from "@/contexts/userAuth";
import Image from "next/image";

const Admin = () => {
  const { userAuth } = useUserAuth();
  return (
    <div>
      <h1>Admin</h1>
      <p>Welcome {userAuth?.name}</p>
      <Image
        src={userAuth?.avatar || "/ruhsc-logo.png"}
        alt="RUHSC Logo"
        width={200}
        height={200}
      />
      <p>Email: {userAuth?.email}</p>
    </div>
  );
};

export default Admin;
