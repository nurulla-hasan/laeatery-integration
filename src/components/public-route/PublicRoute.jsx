"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";


const PublicRoute = ({ children }) => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [isLoadingToken, setIsLoadingToken] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedToken = localStorage.getItem('accessToken');
      setToken(storedToken);
      setIsLoadingToken(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoadingToken && token) {
      router.replace("/");
    }
  }, [isLoadingToken, token, router]);

  if (isLoadingToken) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#E6F8F7]">
        <Loading />
      </div>
    );
  }

  if (!token) {
    return <>{children}</>;
  }
  return null;
};

export default PublicRoute;