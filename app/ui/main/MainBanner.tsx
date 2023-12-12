import Link from "next/link";

export default function MainBanner() {
    return (
        <div
            className="flex flex-col gap-4 h-1/2-screen rounded-lg p-16"
            style={{
                backgroundImage: "url('/Gradient.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <p className="text-[70px] text-white font-[200]">포텐셔플</p>
            <p className="text-[30px] text-white font-[200]">Shuffle your potential</p>
            <div className="flex justify-center items-center h-1/6">
                <Link
                    href={"./main/chatbot"}
                    className="flex justify-center items-center w-1/5 h-full bg-white rounded-[20px] text-purple-700 font-[700]"
                >
                    자기소개 작성하러 가기
                </Link>
            </div>
        </div>
    );
}
