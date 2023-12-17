"use client";

import Link from "next/link";
import { use, useEffect, useState } from "react";

import { useIntroduceFormStore } from "@/store/introduceFormStore";
import { fetchCurrentUserInfo } from "@/app/api/fetchData";
import { useCurrentUserStore } from "@/store/currentUserStore";

import { userInfo } from "@/type/user";

import { updateMyCard } from "@/app/api/userService";

import { showErrorToast } from "@/app/lib/toast";

const ButtonContainer = () => {
    const { name, occupation, keywords, briefIntroduction, introduction } = useIntroduceFormStore();
    const [userData, setUserData] = useState<userInfo>();
    const { user } = useCurrentUserStore();

    useEffect(() => {
        const fetchData = async () => {
            const myCardData = (await fetchCurrentUserInfo(user.token)).data;
            setUserData(myCardData);
        };

        fetchData();
    }, []);

    return (
        <div className="flex gap-8 justify-center">
            <Link href="/main/chatbot">
                <button
                    className="border bg-[#FFFFFF] rounded-[15px] text-[#46148D] font-[700] px-8 py-4 w-auto"
                    onClick={() => {}}
                >
                    다시 작성하기
                </button>
            </Link>
            <Link href="/main">
                <button
                    className="bg-[#7A34F2] rounded-[15px] text-white font-[700] px-8 py-4 w-auto"
                    onClick={() => {
                        if (
                            !name ||
                            !briefIntroduction ||
                            !introduction ||
                            !keywords.length ||
                            occupation === "NONE"
                        ) {
                            showErrorToast("모든 항목을 입력해주세요.");
                            return;
                        }
                        updateMyCard(
                            {
                                user: {
                                    id: userData!.user.id,
                                    name: name,
                                    teamBuildingStatus: userData!.user.teamBuildingStatus,
                                },
                                briefIntroduction: briefIntroduction,
                                introduction: introduction,
                                employmentStatus: userData!.employmentStatus,
                                occupation: occupation,
                                keywords: keywords,
                                createdAt: userData!.createdAt,
                                updatedAt: userData!.updatedAt,
                            },
                            user.token
                        );
                    }}
                >
                    저장하기
                </button>
            </Link>
        </div>
    );
};

export default ButtonContainer;
