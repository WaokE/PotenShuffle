import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

export default function ChatWrapper() {
    return (
        <div className="flex flex-col w-2/3 h-full">
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
        </div>
    );
}
