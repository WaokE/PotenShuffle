import Card from "./Card";
import TextCard from "./TextCard";

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
                className="relative bg-white p-4 rounded-[20px] shadow-md"
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

                <div className="flex justify-center w-auto">
                    <button
                        className="bg-[#7A34F2] rounded-[20px] text-white font-[700] p-4 w-1/5"
                        onClick={() => {
                            setIsModalOpen(false);
                            toggleReconfirmModal();
                        }}
                    >
                        제안 보내기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardModal;
