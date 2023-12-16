// Framework APIs
import { useState } from "react";
import { useRouter } from "next/navigation";

// Components
import SendingOffer from "../SendingOffer";

// State stores
import { useChatbotStore } from "@/store/chatbotStore";
import { useCurrentUserStore } from "@/store/currentUserStore";

// APIs
import { endConversation } from "@/app/api/chatbot";

export default function ChatHeader() {
    const [loading, setLoading] = useState(false);
    const { setChatResult, chatId } = useChatbotStore();
    const token = useCurrentUserStore((state) => state.user.token);
    const router = useRouter();

    const handleCompleteIntroduction = async () => {
        setLoading(true);
        try {
            const res = await endConversation(chatId, token);
            setChatResult(res);
            router.push("/main/introduce");
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex rounded-[20px] shadow-lg p-6 justify-between">
            <div className="flex flex-col gap-2 ">
                <p className="font-bold text-xl">자기소개 작성하기</p>
                <p className="text-gray-300 text-xs">
                    질문에 자유롭게 답변해주세요. 복잡했던 자기소개를 간편하게!
                </p>
            </div>
            <button
                className="bg-[#7A34F2] rounded-[20px] text-white text-xs font-[700] px-8 py-4"
                onClick={handleCompleteIntroduction}
            >
                자기 소개 완료
            </button>
            {loading && <SendingOffer />}
        </div>
    );
}
