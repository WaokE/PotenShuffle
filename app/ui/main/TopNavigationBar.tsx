import Link from "next/link";

export default function TopNavigationBar() {
    return (
        <div className="flex justify-between items-center w-full h-1/20-screen p-4 border-solid border-2 border-black-400">
            <span className="ml-[17%]">팀 매칭 제목</span>
            <Link href="/login" className="mr-[17%]">
                로그인
            </Link>
        </div>
    );
}
