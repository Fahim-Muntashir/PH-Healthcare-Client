// "use server"

import { FieldValues } from "react-hook-form";
import {cookies} from 'next/headers'
import { authKey } from "@/constants/authKey";
import { redirect } from "next/navigation";

export const userLogin = async (data: FieldValues) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}auth/login`, {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(data),
        // cache:"no-store",
        credentials: "include",
    })

    const userInfo = await res.json();

    if (userInfo.data.accessToken)
    {
        cookies().set(authKey, userInfo.data.accessToken)
        redirect('/dashboard')
    }
    return userInfo;
}