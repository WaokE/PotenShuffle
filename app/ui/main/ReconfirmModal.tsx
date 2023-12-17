"use client";

// Framework APIs
import { useEffect } from "react";
import Image from "next/image";

// Components
import Chip from "@/app/ui/main/Chip";

// State stores
import useStore from "@/store/useStore";
import { useCurrentUserStore } from "@/store/currentUserStore";
import { useReconfirmModalStore } from "@/store/reconfirmModalStore";
import { useCardModalStore } from "@/store/cardModalStore";

// APIs
import { fetchCurrentUserInfo } from "@/app/api/fetchData";
import { sendOffer } from "@/app/api/teamOffer";

// Functions
import { showSuccessToast, showErrorToast } from "@/app/lib/toast";
import { validLogin } from "@/app/lib/vaildLogin";

const ReconfirmModal = () => {
    const { toggleReconfirmModal } = useReconfirmModalStore();
    const { selectedCardData } = useCardModalStore();
    const currentUserStore = useStore(useCurrentUserStore, (state) => state);

    useEffect(() => {
        if (!currentUserStore) return;
        const fetchData = async () => {
            const myCardData = (await fetchCurrentUserInfo(currentUserStore.user!.token)).data;
            currentUserStore.setCardData(myCardData);
        };

        fetchData();
    }, [currentUserStore]);

    return (
        <div
            id="modalBackdrop"
            className="fixed inset-0 bg-opacity-50 flex justify-center items-center"
            onClick={toggleReconfirmModal}
        >
            <div
                className="flex flex-col gap-4 items-center bg-white w-auto rounded-lg shadow-lg p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <p className="text-2xl font-[700]">
                    {" "}
                    {selectedCardData.user.name}님에게 팀빌딩 제안을 보내시겠어요?
                </p>
                <p className="text-base">제안 전 슬랙으로 미리 대화를 나눠보시는건 어떨까요?</p>

                <div className="flex justify-center gap-4 w-auto">
                    <Chip
                        label="슬랙 DM 보내기"
                        bgColor="#FFFFFF"
                        textColor="#7A34F2"
                        borderColor="#E0E0E0"
                        onClick={() => {
                            toggleReconfirmModal();
                        }}
                    />

                    <Chip
                        label="제안 보내기"
                        bgColor="#7A34F2"
                        textColor="#FFFFFF"
                        borderColor="#7A34F2"
                        frontIcon={
                            <Image src="/sendOfferIcon.svg" alt="icon" width="15" height="15" />
                        }
                        onClick={() => {
                            toggleReconfirmModal();
                            if (currentUserStore !== undefined) {
                                if (
                                    !validLogin(currentUserStore.user?.tokenExpire!) ||
                                    currentUserStore.user?.cardData?.introduction === ""
                                ) {
                                    showErrorToast(
                                        "팀빌딩 제안을 보내려면 로그인 후 자기소개를 작성해주세요."
                                    );
                                } else {
                                    console.log(
                                        sendOffer(
                                            currentUserStore.user.token,
                                            selectedCardData.user.id
                                        )
                                    );
                                    showSuccessToast(
                                        `${selectedCardData.user.name}님에게 제안을 보냈습니다.`
                                    );
                                }
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ReconfirmModal;
