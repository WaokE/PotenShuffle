// Framework APIs
import { useRouter } from "next/navigation";

// Components
import SendingOffer from "../SendingOffer";

// State stores
import { useChatbotStore } from "@/store/chatbotStore";
import { useCurrentUserStore } from "@/store/currentUserStore";

// APIs
import { endConversation } from "@/app/api/chatbot";

export default function ChatHeader() {
    const { setChatResult, chatId } = useChatbotStore();
    const token = useCurrentUserStore((state) => state.user.token);
    const router = useRouter();

    return (
        <div className="flex rounded-[20px] shadow-lg p-6 justify-between">
            <div className="flex flex-col gap-2 ">
                <p className="font-bold text-xl">자기소개 작성하기</p>
                <p className="text-gray-300 text-xs">
                    질문에 자유롭게 답변해주세요. 복잡했던 자기소개를 간편하게!
                </p>
            </div>
        </div>
    );
}
