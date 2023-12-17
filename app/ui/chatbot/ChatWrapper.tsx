"use client";

import { useEffect } from "react";

import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

import { initiateChat } from "@/app/api/chatbot";

// import useStore from "@/store/useStore";
import { useCurrentUserStore } from "@/store/currentUserStore";
import { useChatbotStore } from "@/store/chatbotStore";

export default function ChatWrapper() {
    const user = useCurrentUserStore((state) => state.user);
    const { setChatId, addChatMessage, setChatMessages } = useChatbotStore();

    useEffect(() => {
        initiateChat(user.token).then((res) => {
            setChatId(res.id);
            setChatMessages(res.messages);
        });

        return () => {
            setChatMessages([]);
        };
    }, []);

    return (
        <div className="flex flex-col w-[66.666667vw] h-full">
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
        </div>
    );
}
