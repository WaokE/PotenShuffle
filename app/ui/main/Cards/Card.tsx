import Image from "next/image";

import { userInfo } from "@/type/user";
import { useCardModalStore } from "@/store/cardModalStore";
import TeamBuildingStatusChip from "./TeamBuildingStatusChip";
import Chip from "../Chip";

type CardWrapperProps = {
    cardData: userInfo;
};

const Card: React.FC<CardWrapperProps> = ({ cardData }) => {
    const { setIsModalOpen, setSelectedCardData } = useCardModalStore();
    return (
        <div
            className="flex flex-col p-4 gap-4 w-full h-1/2-screen border shadow-lg rounded-lg overflow-auto select-none"
            onClick={() => {
                setIsModalOpen(true);
                setSelectedCardData(cardData);
            }}
        >
            <div className="flex justify-between items-center">
                <p className="text-2xl font-[700]">{cardData.user.name}</p>
                <TeamBuildingStatusChip teamBuildingStatus={cardData.user.teamBuildingStatus} />
            </div>
            <p className="font-[700]">{cardData.occupation}</p>
            {cardData.occupation === "DESIGNER" ? (
                <Image src="/_Type=3.png" alt="icon" width="100" height="20" />
            ) : null}
            {cardData.occupation === "WEB_ENGINEER" ? (
                <Image src="/_Type=2.png" alt="icon" width="100" height="20" />
            ) : null}
            {cardData.occupation === "SERVER_ENGINEER" ? (
                <Image src="/_Type=4.png" alt="icon" width="100" height="20" />
            ) : null}
            {cardData.occupation === "PRODUCT_MANAGER" ? (
                <Image src="/_Type=1.png" alt="icon" width="100" height="20" />
            ) : null}
            <p>{cardData.briefIntroduction}</p>
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
