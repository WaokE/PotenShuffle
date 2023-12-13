import Link from "next/link";

export default function TopNavigationBar() {
    return (
        <div className="flex justify-between items-center w-full h-7.5%-screen p-4 border-solid border-2 border-black-400">
            <div className="flex justify-center items-center gap-8 ml-[17%]">
                <span className="font-[700] text-xl">포텐셔플</span>
                <span className="font-[700] text-sm">자기 소개 보기</span>
                <span className="font-[700] text-sm">빌딩 중인 그룹 보기</span>
            </div>
            <Link href="/login" className="mr-[17%]">
                로그인
            </Link>
        </div>
    );
}
