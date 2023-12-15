"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import ChatWrapper from "@/app/ui/chatbot/ChatWrapper";

import { validLogin } from "@/app/lib/vaildLogin";

export default function ChatbotPage() {
    const userData = localStorage.getItem("user-storage");
    const expireDate = JSON.parse(userData!).state.user.tokenExpire;

    const router = useRouter();

    useEffect(() => {
        if (!validLogin(expireDate!)) router.push("/login");
    }, []);

    if (!validLogin(expireDate!)) return null;

    return (
        <div className="flex justify-center">
            <ChatWrapper />
        </div>
    );
}
