export default function ChatFooter() {
    return (
        <div className="flex border-2">
            <input className="flex-grow p-2" placeholder="답변을 입력해주세요" />
            <button className="p-2">전송</button>
        </div>
    );
}