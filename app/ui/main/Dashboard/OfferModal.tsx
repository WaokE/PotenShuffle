import Card from "../Cards/Card";

import TextCard from "../Cards/TextCard";
import Chip from "../Chip";

import { useOfferModalStore } from "@/store/offerModalStore";
import { useCurrentUserStore } from "@/store/currentUserStore";

import { respondToOffer } from "@/app/api/teamOffer";

const OfferModal = () => {
    const { setIsModalOpen, selectedOfferCard, selectedOfferId } = useOfferModalStore();
    const { user } = useCurrentUserStore();

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
                        {selectedOfferCard.user && <Card cardData={selectedOfferCard} />}
                    </div>
                    <div className="flex-1" style={{ flexBasis: "60%" }}>
                        <TextCard text={selectedOfferCard.introduction} />
                    </div>
                </div>

                <div className="flex justify-center gap-4 w-auto">
                    <Chip
                        label="거절하기"
                        bgColor="#FFFFFF"
                        textColor="#7A34F2"
                        borderColor="#E0E0E0"
                        onClick={() => {
                            respondToOffer(user.token, selectedOfferId, "DECLINE");
                            setIsModalOpen(false);
                        }}
                    />

                    <Chip
                        label="수락하기"
                        bgColor="#7A34F2"
                        textColor="#FFFFFF"
                        borderColor="#7A34F2"
                        onClick={() => {
                            respondToOffer(user.token, selectedOfferId, "ACCEPT");
                            setIsModalOpen(false);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default OfferModal;
