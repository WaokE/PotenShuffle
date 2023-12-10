export default function MainBanner() {
    return (
        <div
            className="flex flex-col gap-4 h-1/2-screen rounded-lg p-8"
            style={{
                backgroundImage: "url('/Gradient.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <p className="text-[90px] text-white font-[700]">
                FIND YOUR
                <br />
                TEAMMATE
            </p>
            <div className="flex justify-center items-center h-1/6">
                <button className="w-1/5 h-full bg-white rounded-[20px] text-purple-700 font-[700]">
                    자기 소개 작성하러 가기
                </button>
            </div>
        </div>
    );
}
