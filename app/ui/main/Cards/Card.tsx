import Image from "next/image";

import { userInfo } from "@/type/type";

type CardWrapperProps = {
    cardData: userInfo;
};

const Card: React.FC<CardWrapperProps> = ({ cardData }) => {
    return (
        <div className="flex flex-col p-4 gap-4 w-full h-1/2-screen border shadow-lg rounded-lg overflow-auto">
            <div className="flex justify-between items-center">
                <p className="text-2xl font-[700]">{cardData.user.name}</p>
                <Image src="/icon.png" alt="icon" width="20" height="20" />
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
                    <div className="bg-gray-200 rounded-full p-2">{keyword}</div>
                ))}
            </div>
        </div>
    );
};

export default Card;
