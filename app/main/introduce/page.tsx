"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import IntroduceMessage from "@/app/ui/main/introduce/IntroduceMessage";
import IntroduceFormContainer from "@/app/ui/main/introduce/IntroduceFormContainer";
import ButtonContainer from "@/app/ui/main/introduce/ButtonContainer";

import { useCurrentUserStore } from "@/store/currentUserStore";

import { validLogin } from "@/app/lib/vaildLogin";

const IntroducePage = () => {
    const expiredData = useCurrentUserStore((state) => state.user.tokenExpire);
    const router = useRouter();
    useEffect(() => {
        if (!validLogin(expiredData)) router.push("/login");
    }, []);

    if (!validLogin(expiredData)) return null;

    return (
        <div className="rounded-[20px] flex flex-col gap-8 p-8 mb-8 mt-4 w-2/3 h-auto bg-[#FBFBFB]">
            <IntroduceMessage />
            <IntroduceFormContainer />
            <ButtonContainer />
        </div>
    );
};

export default IntroducePage;
