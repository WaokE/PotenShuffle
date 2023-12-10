const sampleChatData = [
    ["chatbot", "반갑습니다! OO님, 저는 챗봇입니다."],
    ["chatbot", "무엇을 도와드릴까요?"],
    ["user", "안녕!"],
    [
        "user",
        "사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다. 사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다. 사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다. 사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다.",
    ],
    [
        "chatbot",
        "사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다. 사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다. 사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다. 사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다.",
    ],
    [
        "user",
        "사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다. 사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다. 사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다. 사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다.",
    ],
    [
        "chatbot",
        "사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다. 사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다. 사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다. 사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다.",
    ],
    [
        "user",
        "사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다. 사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다. 사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다. 사용자의 대답이 빈 공간에 들어갑니다. 내용이 길어지면 이렇게 됩니다.",
    ],
];
export default function ChatBody() {
    const reversedChatData = [...sampleChatData].reverse();
    return (
        <div className="flex flex-col-reverse gap-4 p-2 h-2/3-screen overflow-y-auto">
            {reversedChatData.map((data, index) => {
                // 챗봇이 말하는 경우
                if (data[0] === "chatbot") {
                    return (
                        <div
                            className="flex gap-4 justify-start text-white"
                            key={`message-${index}`}
                        >
                            <div className="w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center">
                                챗봇
                            </div>
                            <div className="bg-[#7A34F2] p-3 rounded-[15px] max-w-[50%] break-words">
                                {data[1]}
                            </div>
                        </div>
                    );
                }
                // 사용자가 말하는 경우
                else {
                    return (
                        <div className="flex justify-end" key={`message-${index}`}>
                            <div className="bg-[#F6EFFF] p-3 rounded-[15px] max-w-[50%] break-words">
                                {data[1]}
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
}
