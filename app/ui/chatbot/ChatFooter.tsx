// Framwork APIs
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Components
import SendingOffer from "../SendingOffer";

// State stores
import { useChatbotStore } from "@/store/chatbotStore";
import { useCurrentUserStore } from "@/store/currentUserStore";

// APIs
import { endConversation, sendMessage } from "@/app/api/chatbot";

export default function ChatFooter() {
    const [loading, setLoading] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const { chatId, userInput, setUserInput, setChatMessages, addChatMessage, setChatResult } =
        useChatbotStore();
    const token = useCurrentUserStore((state) => state.user.token);
    const router = useRouter();

    // const handleCompleteIntroduction = async () => {
    //     setLoading(true);
    //     try {
    //         const res = await endConversation(chatId, token);
    //         setChatResult(res);
    //         router.push("/main/introduce");
    //     } catch (e) {
    //         console.error(e);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            setIsSending(true);
            addChatMessage({ role: "user", content: userInput });
            addChatMessage({ role: "bot", content: "답변 생성 중..." });
            setUserInput("");

            sendMessage(chatId, userInput, token)
                .then((res) => {
                    if (res.result !== null) {
                        setChatResult(res.result);
                        router.push("/main/introduce");
                    } else {
                        setChatMessages(res.messages);
                    }
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
                            if (res.result !== null) {
                                setChatResult(res.result);
                                router.push("/main/introduce");
                            } else {
                                setChatMessages(res.messages);
                            }
                        })
                        .finally(() => {
                            setIsSending(false);
                        });
                }}
                disabled={isSending}
            >
                {sendIcon}
            </button>
            {loading && <SendingOffer />}
        </div>
    );
}
