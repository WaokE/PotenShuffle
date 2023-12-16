import Link from "next/link";

import { sendMessage } from "@/app/api/chatbot";

import { useChatbotStore } from "@/store/chatbotStore";
import { useCurrentUserStore } from "@/store/currentUserStore";

export default function ChatFooter() {
    const { chatId, userInput, setUserInput, setChatMessages } = useChatbotStore();
    const token = useCurrentUserStore((state) => state.user.token);
    return (
        <div className="flex border-2">
            <input
                className="flex-grow p-2"
                placeholder="답변을 입력해주세요"
                onChange={(event) => {
                    setUserInput(event.target.value);
                }}
            />

            <button
                className="p-2"
                onClick={() => {
                    sendMessage(chatId, userInput, token).then((res) =>
                        setChatMessages(res.messages)
                    );
                }}
            >
                전송
            </button>
        </div>
    );
}
