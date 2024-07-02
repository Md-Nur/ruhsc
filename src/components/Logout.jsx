"use client";
import useUserAuth from "@/contexts/userAuth";
import axios from "axios";

const Logout = () => {
  const { setUserAuth } = useUserAuth();
  return (
    <button
      className=""
      onClick={() => {
        axios.get("/api/logout").then(() => {
          setUserAuth(null);
        });
      }}
    >
      Logout
    </button>
  );
};

export default Logout;
