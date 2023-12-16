import Image from "next/image";

import { EmploymentStatusType } from "@/type/user";
import { OccupationType } from "@/type/user";

type sentOfferData = {
    id: number;
    receivedUser: {
        id: number;
        name: string;
        card: {
            occupation: OccupationType;
            employmentStatus: EmploymentStatusType;
            keywords: string[];
            briefIntroduction: string;
        };
    };
    status: "NONE" | "PENDING" | "ACCEPTED" | "DECLINED";
    sentAt: string;
};
const SentOffers = () => {
    const sampleSentOffers: sentOfferData[] = [
        {
            id: 1,
            receivedUser: {
                id: 1,
                name: "John Doe",
                card: {
                    occupation: "PRODUCT_MANAGER",
                    employmentStatus: "CURRENTLY_WORKING",
                    keywords: ["React", "JavaScript", "TypeScript"],
                    briefIntroduction:
                        "Experienced software engineer specializing in web development.",
                },
            },
            status: "PENDING",
            sentAt: "2022-01-01",
        },
        {
            id: 2,
            receivedUser: {
                id: 2,
                name: "Brown",
                card: {
                    occupation: "WEB_ENGINEER",
                    employmentStatus: "PREPARING_FOR_EMPLOYMENT",
                    keywords: ["React", "JavaScript", "TypeScript"],
                    briefIntroduction:
                        "Experienced software engineer specializing in web development.",
                },
            },
            status: "DECLINED",
            sentAt: "2023-01-01",
        },
        {
            id: 3,
            receivedUser: {
                id: 3,
                name: "Jane Doe",
                card: {
                    occupation: "SERVER_ENGINEER",
                    employmentStatus: "LOOKING_FOR_JOB",
                    keywords: ["React", "JavaScript", "TypeScript"],
                    briefIntroduction:
                        "Experienced software engineer specializing in web development.",
                },
            },
            status: "ACCEPTED",
            sentAt: "2023-02-01",
        },
    ];

    const getOccupationIcon = (occupation: string) => {
        switch (occupation) {
            case "DESIGNER":
                return <Image src="/_Type=5.svg" alt="icon" width="30" height="30" />;
            case "WEB_ENGINEER":
                return <Image src="/_Type=2.svg" alt="icon" width="30" height="30" />;
            case "SERVER_ENGINEER":
                return <Image src="/_Type=4.svg" alt="icon" width="30" height="30" />;
            case "PRODUCT_MANAGER":
                return <Image src="/_Type=1.svg" alt="icon" width="30" height="30" />;
            default:
                return null;
        }
    };

    return (
        <>
            {sampleSentOffers.length === 0 ? (
                <div className="flex justify-center h-1/2-screen w-full bg-[url('/noResult.svg')] bg-center bg-cover">
                    <p className="select-none text-gray-400">보낸 제안이 없습니다.</p>
                </div>
            ) : (
                <div className="flex flex-col gap-1 h-1/2-screen w-full">
                    {sampleSentOffers.map((offer) => (
                        <div
                            key={offer.id}
                            className={`flex border h-1/6 bg-white rounded-lg shadow ${
                                offer.status === "DECLINED" ? "opacity-50" : ""
                            }`}
                        >
                            {getOccupationIcon(offer.receivedUser.card.occupation)}
                            <div className="flex flex-col gap-1">
                                <p>{offer.receivedUser.name}님에게 제안을 보냈습니다.</p>
                                <p>{offer.sentAt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default SentOffers;
