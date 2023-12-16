"use client";
// Framework APIs
import Image from "next/image";

// Components
import Chip from "../Chip";
import TeamBuildingStatusChip from "./TeamBuildingStatusChip";

// Types
import { userInfo } from "@/type/user";

// Functions
import { convertOccupation } from "@/app/lib/convertName";

// State stores
import { useCardModalStore } from "@/store/cardModalStore";

type CardWrapperProps = {
    cardData: userInfo;
};

const Card: React.FC<CardWrapperProps> = ({ cardData }) => {
    const { setIsModalOpen, setSelectedCardData } = useCardModalStore();
    return (
        <div
            className="flex flex-col p-4 gap-4 w-full h-1/2-screen border rounded-lg overflow-auto select-none
            hover:bg-var(--White, #FFF) hover:shadow-lg transition-all"
            onClick={() => {
                setIsModalOpen(true);
                setSelectedCardData(cardData);
            }}
        >
            <div className="flex justify-between items-center">
                <p className="text-2xl font-[700]">{cardData.user.name}</p>
                <TeamBuildingStatusChip teamBuildingStatus={cardData.user.teamBuildingStatus} />
            </div>
            <p className="font-[700]">{convertOccupation(cardData.occupation)}</p>
            {cardData.occupation === "DESIGNER" ? (
                <Image src="/_Type=3.svg" alt="icon" width="100" height="20" />
            ) : null}
            {cardData.occupation === "WEB_ENGINEER" ? (
                <Image src="/_Type=2.svg" alt="icon" width="100" height="20" />
            ) : null}
            {cardData.occupation === "SERVER_ENGINEER" ? (
                <Image src="/_Type=4.svg" alt="icon" width="100" height="20" />
            ) : null}
            {cardData.occupation === "PRODUCT_MANAGER" ? (
                <Image src="/_Type=1.svg" alt="icon" width="100" height="20" />
            ) : null}
            <p className="text-sm">{cardData.briefIntroduction}</p>
            <div className="flex flex-wrap gap-2">
                {cardData.keywords.map((keyword) => (
                    <Chip
                        key={keyword}
                        label={keyword}
                        bgColor="#FFFFFF"
                        textColor="#121213"
                        borderColor="#E0E0E0"
                    />
                ))}
            </div>
        </div>
    );
};

export default Card;
