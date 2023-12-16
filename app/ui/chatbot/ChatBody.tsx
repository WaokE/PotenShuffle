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
                            <div className="w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center">
                                챗봇
                            </div>
                            <div className="bg-[#7A34F2] p-3 rounded-[15px] max-w-[50%] break-words">
                                {data.content}
                            </div>
                        </div>
                    );
                }
                // 사용자가 말하는 경우
                else {
                    return (
                        <div className="flex justify-end" key={`message-${index}`}>
                            <div className="bg-[#F6EFFF] p-3 rounded-[15px] max-w-[50%] break-words">
                                {data.content}
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
}
