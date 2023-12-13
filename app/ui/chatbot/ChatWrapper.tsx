"use client";

import { useEffect } from "react";

import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

import { initiateChat } from "@/app/api/chatbot";

export default function ChatWrapper() {
    useEffect(() => {
        console.log(initiateChat());
    }, []);

    return (
        <div className="flex flex-col w-2/3 h-full">
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
        </div>
    );
}
