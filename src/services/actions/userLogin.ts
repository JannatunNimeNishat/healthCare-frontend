"use server";

import { IUserLoginData } from "@/app/login/page";

export const userLogin = async (userData: IUserLoginData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      cache: "no-store",
    }
  );
  const userInfo = await res.json();
  return userInfo;
};
