import Image from "next/image";

import { useEffect } from "react";

import { useCurrentUserStore } from "@/store/currentUserStore";
import { useDashboardStore } from "@/store/dashboardStore";

import { fetchSentOffers } from "@/app/api/teamOffer";

const ReceivedOffers = () => {
    const token = useCurrentUserStore((state) => state.user.token);
    const { sentOffers, setSentOffers } = useDashboardStore();

    useEffect(() => {
        const fetchData = async () => {
            const sentOffers = await fetchSentOffers(token);
            setSentOffers(sentOffers.data.items);
        };

        fetchData();
    }, []);

    const getOccupationIcon = (occupation: string) => {
        switch (occupation) {
            case "DESIGNER":
                return <Image src="/_Type=3.png" alt="icon" width="30" height="30" />;
            case "WEB_ENGINEER":
                return <Image src="/_Type=2.png" alt="icon" width="30" height="30" />;
            case "SERVER_ENGINEER":
                return <Image src="/_Type=4.png" alt="icon" width="30" height="30" />;
            case "PRODUCT_MANAGER":
                return <Image src="/_Type=1.png" alt="icon" width="30" height="30" />;
            case "IOS_ENGINEER":
                return <Image src="/_Type=5.png" alt="icon" width="30" height="30" />;
            case "AOS_ENGINEER":
                return <Image src="/_Type=5.png" alt="icon" width="30" height="30" />;
            default:
                return null;
        }
    };

    return (
        <>
            {sentOffers.length === 0 ? (
                <div className="flex justify-center h-1/2-screen w-full bg-[url('/noResult.svg')] bg-center bg-cover">
                    <p className="select-none text-gray-400">보낸 제안이 없습니다.</p>
                </div>
            ) : (
                <div className="flex flex-col gap-4 h-1/2-screen w-full">
                    {sentOffers.map((offer) => (
                        <div
                            key={offer.id}
                            className={`flex items-center border px-4 gap-4 h-1/6 bg-white rounded-[15px] shadow select-none ${
                                offer.status === "DECLINED" ? "opacity-50" : ""
                            }`}
                        >
                            {getOccupationIcon(offer.receivedUser.card.occupation)}
                            <div className="flex flex-col gap-1">
                                <p className="font-[700]">
                                    {offer.receivedUser.name}님에게 제안을 보냈습니다.
                                </p>
                                <p className="text-[#9C9C9C]">
                                    {new Date(offer.sentAt).toLocaleString("ko-KR")}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default ReceivedOffers;
