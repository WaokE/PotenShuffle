import Image from "next/image";

import { useEffect } from "react";

import { useCurrentUserStore } from "@/store/currentUserStore";
import { useDashboardStore } from "@/store/dashboardStore";

import { fetchReceivedOffers } from "@/app/api/teamOffer";

const ReceivedOffers = () => {
    const token = useCurrentUserStore((state) => state.user.token);
    const { receivedOffers, setReceivedOffers } = useDashboardStore();

    useEffect(() => {
        const fetchData = async () => {
            const receivedOffers = await fetchReceivedOffers(token);
            setReceivedOffers(receivedOffers.data.items);
        };

        fetchData();
    }, []);

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
            {receivedOffers.length === 0 ? (
                <div className="flex justify-center h-1/2-screen w-full bg-[url('/noResult.svg')] bg-center bg-cover">
                    <p className="select-none text-gray-400">받은 제안이 없습니다.</p>
                </div>
            ) : (
                <div className="flex flex-col gap-1 h-1/2-screen w-full">
                    {receivedOffers.map((offer) => (
                        <div
                            key={offer.id}
                            className={`flex border h-1/6 bg-white rounded-lg shadow select-none ${
                                offer.status === "DECLINED" ? "opacity-50" : ""
                            }`}
                        >
                            {getOccupationIcon(offer.sentUser.card.occupation)}
                            <div className="flex flex-col gap-1">
                                <p>{offer.sentUser.name}님에게 제안을 받았습니다.</p>
                                <p>{offer.receivedAt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default ReceivedOffers;
