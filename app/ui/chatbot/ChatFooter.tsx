import React, { useState } from "react";
import Image from "next/image";

import { sendMessage } from "@/app/api/chatbot";

import { useChatbotStore } from "@/store/chatbotStore";
import { useCurrentUserStore } from "@/store/currentUserStore";

export default function ChatFooter() {
    const { chatId, userInput, setUserInput, setChatMessages, addChatMessage } = useChatbotStore();
    const token = useCurrentUserStore((state) => state.user.token);

    const [isSending, setIsSending] = useState(false);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            setIsSending(true);
            addChatMessage({ role: "user", content: userInput });
            addChatMessage({ role: "bot", content: "답변 생성 중..." });
            setUserInput("");

            sendMessage(chatId, userInput, token)
                .then((res) => {
                    setChatMessages(res.messages);
                })
                .finally(() => {
                    setIsSending(false);
                });
        }
    };

    const sendIcon = (
        <Image src="/sendOfferIcon2.svg" alt="send" width={24} height={24} layout="fixed" />
    );

    return (
        <div className="flex justify-between border rounded-lg">
            <textarea
                className="p-2 resize-none focus:outline-none rounded-lg w-full"
                placeholder="답변을 입력해주세요"
                value={userInput}
                onChange={(event) => {
                    setUserInput(event.target.value);
                }}
                onKeyDown={handleKeyDown}
                spellCheck="false"
            />

            <button
                className="p-4"
                onClick={() => {
                    setIsSending(true);
                    addChatMessage({ role: "user", content: userInput });
                    addChatMessage({ role: "bot", content: "답변 생성 중..." });
                    setUserInput("");

                    sendMessage(chatId, userInput, token)
                        .then((res) => {
                            setChatMessages(res.messages);
                        })
                        .finally(() => {
                            setIsSending(false);
                        });
                }}
                disabled={isSending}
            >
                {sendIcon}
            </button>
        </div>
    );
}
