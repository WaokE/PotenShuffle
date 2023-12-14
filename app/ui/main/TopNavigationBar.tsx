"use client";

import Link from "next/link";

import useStore from "@/store/useStore";
import { useCurrentUserStore } from "@/store/currentUserStore";

export default function TopNavigationBar() {
    const currentUserStore = useStore(useCurrentUserStore, (store) => store);

    return (
        <div className="flex justify-between items-center w-full h-7.5%-screen p-4 border-solid border-b-2 border-black-400">
            <div className="flex justify-center items-center gap-8 ml-[17%]">
                <Link href="/main">
                    <span className="font-bold text-xl">포텐셔플</span>
                </Link>
                <span
                    className="font-bold text-sm underline text-purple-500"
                    style={{ textDecorationThickness: "2px", textUnderlineOffset: "10px" }}
                >
                    자기 소개 보기
                </span>
                <span className="font-bold text-sm">빌딩 중인 그룹 보기</span>
            </div>
            {currentUserStore?.user.isLoggedIn ? (
                <Link href="/main" className="mr-[17%]">
                    <span
                        className="font-bold text-sm"
                        onClick={() => {
                            localStorage.removeItem("user-storage");
                            currentUserStore.logout();
                            window.location.reload();
                        }}
                    >
                        로그아웃
                    </span>
                </Link>
            ) : (
                <Link href="/login" className="mr-[17%]">
                    <span className="font-bold text-sm mr">로그인</span>
                </Link>
            )}
        </div>
    );
}
