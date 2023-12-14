"use client";

import { useEffect } from "react";

import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

import { initiateChat } from "@/app/api/chatbot";

import useStore from "@/store/useStore";
import { useCurrentUserStore } from "@/store/currentUserStore";

export default function ChatWrapper() {
    const user = useCurrentUserStore((state) => state.user);
    useEffect(() => {
        console.log(initiateChat(user.token));
    }, []);

    return (
        <div className="flex flex-col w-2/3 h-full">
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
        </div>
    );
}
