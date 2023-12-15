"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import ChatWrapper from "@/app/ui/chatbot/ChatWrapper";

import { useCurrentUserStore } from "@/store/currentUserStore";

import { validLogin } from "@/app/lib/vaildLogin";

export default function ChatbotPage() {
    const expiredData = useCurrentUserStore((state) => state.user.tokenExpire);
    const router = useRouter();

    useEffect(() => {
        if (!validLogin(expiredData)) router.push("/login");
    }, []);

    if (!validLogin(expiredData)) return null;

    return (
        <div className="flex justify-center">
            <ChatWrapper />
        </div>
    );
}
