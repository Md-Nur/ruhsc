"use client";
import { useEffect, useState } from "react";
import { UserAuthContext } from "@/contexts/userAuth";
import axios from "axios";

const UserAuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userAuth) {
      axios
        .get("/api/jwt")
        .then((response) => {
          setUserAuth(response.data);
        })
        .catch(() => {
          setUserAuth(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <UserAuthContext.Provider
      value={{ userAuth, setUserAuth, loading, setLoading }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthProvider;
