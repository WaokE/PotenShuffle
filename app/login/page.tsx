"use client";

import { useRouter } from "next/navigation";

import { useLoginStore } from "@/store/loginStore";
import { useCurrentUserStore } from "@/store/currentUserStore";
import { signIn } from "../api/auth";

export default function LoginPage() {
    const { email, password, setEmail, setPassword } = useLoginStore();
    const { setUser } = useCurrentUserStore();
    const router = useRouter();

    const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {
            const res = await signIn(email, password);
            const currentTime: Date = new Date();
            const tokenExpireDate: Date = new Date(currentTime.getTime() + 60 * 60 * 1000);

            setUser({
                name: res.data.name,
                email: email,
                token: res.data.token,
                tokenExpire: tokenExpireDate,
            });

            router.push("/main");
        } catch (error) {
            console.error("로그인 오류:", error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="flex flex-col gap-8 items-center w-1/6 h-1/2">
                <p className="font-[700] text-6xl bg-clip-text text-transparent bg-gradient-to-b from-[#A26CFF] to-[#5800F0] loginBanner">
                    포텐셔플
                </p>
                <form className="flex flex-col w-full">
                    <input
                        className="border border-gray-300 rounded-t-lg p-2"
                        type="email"
                        placeholder="이메일"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <input
                        className="border border-gray-300 rounded-b-lg p-2"
                        type="password"
                        placeholder="비밀번호"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="bg-[#7A34F2] rounded-[20px] text-white font-[700] w-full mt-8 p-4"
                        onClick={handleSignIn}
                    >
                        로그인
                    </button>
                </form>
            </div>
        </div>
    );
}
