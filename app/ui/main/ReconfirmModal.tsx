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
                className="flex flex-col gap-4 bg-white w-auto rounded-lg shadow-lg p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <p> {selectedCardData.user.name}님에게 팀빌딩 제안을 보내시겠어요?</p>
                <Chip
                    label="제안 보내기"
                    bgColor="#7A34F2"
                    textColor="#FFFFFF"
                    borderColor="#7A34F2"
                    frontIcon={icon}
                />
            </div>
        </div>
    );
};

export default ReconfirmModal;
