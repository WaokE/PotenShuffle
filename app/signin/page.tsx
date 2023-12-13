"use client";

import { useSignInStore } from "@/store/signInStore";
import { signUp } from "../api/auth";

export default function LoginPage() {
    const { email, password, name, setEmail, setPassword, setName } = useSignInStore();

    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="flex flex-col gap-8 items-center w-1/6 h-1/2">
                <p className="font-[700] text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    FIND YOUR
                    <br />
                    TEAMMATE
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
                        className="border border-gray-300 p-2"
                        type="password"
                        placeholder="비밀번호"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        className="border border-gray-300 p-2 rounded-b-lg"
                        type="text"
                        placeholder="이름"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <button
                        className="bg-[#7A34F2] rounded-[20px] text-white font-[700] mt-8 p-4"
                        onClick={(e) => {
                            e.preventDefault();
                            console.log(signUp(email, password, name));
                        }}
                    >
                        회원가입
                    </button>
                </form>
            </div>
        </div>
    );
}
