"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import IntroduceMessage from "@/app/ui/main/introduce/IntroduceMessage";
import IntroduceFormContainer from "@/app/ui/main/introduce/IntroduceFormContainer";
import ButtonContainer from "@/app/ui/main/introduce/ButtonContainer";

import { validLogin } from "@/app/lib/vaildLogin";

const IntroducePage = () => {
    const userData = localStorage.getItem("user-storage");
    const expireDate = JSON.parse(userData!).state.user.tokenExpire;

    const router = useRouter();
    useEffect(() => {
        if (!validLogin(expireDate)) router.push("/login");
    }, []);

    if (!validLogin(expireDate)) return null;

    return (
        <div className="rounded-[20px] flex flex-col gap-8 p-8 mb-8 mt-4 w-2/3 h-auto bg-[#FBFBFB]">
            <IntroduceMessage />
            <IntroduceFormContainer />
            <ButtonContainer />
        </div>
    );
};

export default IntroducePage;
