"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import ChatWrapper from "@/app/ui/chatbot/ChatWrapper";

import useStore from "@/store/useStore";
import { useCurrentUserStore } from "@/store/currentUserStore";

import { validLogin } from "@/app/lib/vaildLogin";

export default function ChatbotPage() {
    // expireDate: string | undefined (for evade hydration error)
    const expireDate = useStore(useCurrentUserStore, (state) => state.user.tokenExpire);

    const router = useRouter();

    // useEffect(() => {
    //     // expireDate가 undefined일 때는 라우팅 검사 스킵
    //     if (expireDate === undefined) return;
    //     if (!expireDate || !validLogin(expireDate)) {
    //         router.push("/login");
    //     }
    // }, [expireDate]);

    // 렌더링 중지 (undefined일 때 | 로그인 유효기간이 지났을 때)
    // if (!validLogin(expireDate!) || expireDate === undefined) return null;

    return (
        <div className="flex justify-center">
            <ChatWrapper />
        </div>
    );
}
