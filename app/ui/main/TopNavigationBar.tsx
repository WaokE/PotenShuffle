"use client";

// Framework APIs
import Link from "next/link";

// State stores
import useStore from "@/store/useStore";
import { useCurrentUserStore } from "@/store/currentUserStore";

// Functions
import { validLogin } from "@/app/lib/vaildLogin";

export default function TopNavigationBar() {
    const currentUserStore = useStore(useCurrentUserStore, (store) => store);

    return (
        <div className="flex justify-between items-center w-full h-7.5%-screen p-4 border-solid border-b-2 border-black-400">
            <div className="flex justify-center items-center gap-8 ml-[17%]">
                <Link href="/main">
                    <span className="font-bold text-xl">포텐셔플</span>
                </Link>
            </div>
            {currentUserStore && validLogin(currentUserStore?.user.tokenExpire!) ? (
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
