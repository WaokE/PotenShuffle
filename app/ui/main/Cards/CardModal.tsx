import Image from "next/image";

import Card from "./Card";
import TextCard from "./TextCard";
import Chip from "../Chip";

import { useCardModalStore } from "@/store/cardModalStore";
import { useReconfirmModalStore } from "@/store/reconfirmModalStore";

const CardModal = () => {
    const { setIsModalOpen, selectedCardData } = useCardModalStore();
    const { toggleReconfirmModal } = useReconfirmModalStore();
    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={() => {
                setIsModalOpen(false);
            }}
        >
            <div
                className="relative w-1/2 bg-white p-4 rounded-[20px] shadow-md"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-lg text-gray-400"
                    onClick={() => {
                        setIsModalOpen(false);
                    }}
                >
                    &#x2715;
                </button>
                <div className="flex p-5 gap-8">
                    <div className="flex-1" style={{ flexBasis: "40%" }}>
                        <Card cardData={selectedCardData} />
                    </div>
                    <div className="flex-1" style={{ flexBasis: "60%" }}>
                        <TextCard text={selectedCardData.preferredTeamMember} />
                    </div>
                </div>

                <div className="flex justify-center gap-4 w-auto">
                    <Chip
                        label="슬랙 DM 보내기"
                        bgColor="#FFFFFF"
                        textColor="#7A34F2"
                        borderColor="#E0E0E0"
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
                            setIsModalOpen(false);
                            toggleReconfirmModal();
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CardModal;
