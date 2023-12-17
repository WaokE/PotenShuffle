import { useChatbotStore } from "@/store/chatbotStore";

export default function ChatBody() {
    const chatbotMessage = useChatbotStore((state) => state.chatMessages);
    const reversedChatData = [...chatbotMessage].reverse();

    return (
        <div className="flex flex-col-reverse gap-4 p-2 h-2/3-screen overflow-y-auto">
            {reversedChatData.map((data, index) => {
                // 챗봇이 말하는 경우
                if (data.role === "bot") {
                    return (
                        <div
                            className="flex gap-4 justify-start text-white"
                            key={`message-${index}`}
                        >
                            <div className="w-[60px] h-[60px] rounded-full bg-[url('/chatBotProfile.svg')]" />
                            <div className="bg-[#FAF6FF] p-3 rounded-[15px] text-[#46148D] max-w-[50%] break-words shadow-md">
                                {data.content}
                            </div>
                        </div>
                    );
                }
                // 사용자가 말하는 경우
                else {
                    return (
                        <div className="flex justify-end" key={`message-${index}`}>
                            <div className="bg-[#FFFFFF] p-3 rounded-[15px] max-w-[50%] break-words shadow-md">
                                {data.content}
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
}
