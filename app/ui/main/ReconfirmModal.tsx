"use client";

import Image from "next/image";

import Chip from "@/app/ui/main/Chip";

import { useReconfirmModalStore } from "@/store/reconfirmModalStore";
import { useCardModalStore } from "@/store/cardModalStore";

const ReconfirmModal = () => {
    const { toggleReconfirmModal } = useReconfirmModalStore();
    const { selectedCardData } = useCardModalStore();

    const icon = <Image src="/sendOfferIcon.svg" width={20} height={20} alt="sendoffericon" />;
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
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ReconfirmModal;
