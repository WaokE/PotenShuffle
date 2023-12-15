"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import IntroduceMessage from "@/app/ui/main/introduce/IntroduceMessage";
import IntroduceFormContainer from "@/app/ui/main/introduce/IntroduceFormContainer";
import ButtonContainer from "@/app/ui/main/introduce/ButtonContainer";

import useStore from "@/store/useStore";
import { useCurrentUserStore } from "@/store/currentUserStore";

import { validLogin } from "@/app/lib/vaildLogin";

const IntroducePage = () => {
    // expireDate: string | undefined (for evade hydration error)
    const expireDate = useStore(useCurrentUserStore, (state) => state.user.tokenExpire);

    const router = useRouter();
    useEffect(() => {
        // expireDate가 undefined일 때는 라우팅 검사 스킵
        if (expireDate === undefined) return;
        if (!expireDate || !validLogin(expireDate)) {
            router.push("/login");
        }
    }, [expireDate]);

    // 렌더링 중지 (undefined일 때 | 로그인 유효기간이 지났을 때)
    if (!validLogin(expireDate!)) return null;

    return (
        <div className="rounded-[20px] flex flex-col gap-8 p-8 mb-8 mt-4 w-2/3 h-auto bg-[#FBFBFB]">
            <IntroduceMessage />
            <IntroduceFormContainer />
            <ButtonContainer />
        </div>
    );
};

export default IntroducePage;
