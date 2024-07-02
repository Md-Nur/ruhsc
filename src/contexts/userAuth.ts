"use client";
import { useContext } from "react";
import { createContext } from "react";

const UserAuthContext = createContext({
  userAuth: {
    name: "",
    email: "",
    avatar: "",
  },
  setUserAuth: () => {},
  loading: true,
  setLoading: () => {},
});

const useUserAuth = () => {
  return useContext(UserAuthContext);
};

export default useUserAuth;

export { UserAuthContext };
