"use client";
import { instance } from "@/hooks/instance";
import { LoginData } from "@/types/LoginType";
import { useMutation } from "@tanstack/react-query";


export const postLogin = () => {
  return useMutation({
    mutationFn: (data: LoginData) =>
      instance().post("/auth/login", data).then((res) => res.data),
  });
  
};