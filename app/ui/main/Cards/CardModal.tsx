import Card from "./Card";
import TextCard from "./TextCard";

import { useCardModalStore } from "@/store/cardModalStore";

const CardModal = () => {
    const { setIsModalOpen, selectedCardData } = useCardModalStore();
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="relative bg-white p-4 rounded-[20px] shadow-md">
                <button
                    className="absolute top-4 right-4 text-lg text-gray-400"
                    onClick={() => {
                        setIsModalOpen(false);
                    }}
                >
                    &#x2715;
                </button>
                <div className="flex p-10 gap-8">
                    <Card cardData={selectedCardData} />
                    <TextCard text={selectedCardData.preferredTeamMember} />
                </div>
            </div>
        </div>
    );
};

export default CardModal;
