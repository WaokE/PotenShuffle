export default function TopNavigationBar() {
    return (
        <div className="flex justify-center items-center gap-16 w-full h-7.5%-screen p-4 border-solid border-b border-black-400">
            <span
                className="font-bold text-sm underline text-purple-500"
                style={{ textDecorationThickness: "2px", textUnderlineOffset: "10px" }}
            >
                자기 소개 보기
            </span>
            <span className="font-bold text-sm">빌딩 중인 그룹 보기</span>
        </div>
    );
}
