// Framwork APIs
import Link from "next/link";
import { useEffect } from "react";

import { fetchCurrentUserInfo } from "@/app/api/fetchData";

// State stores
import { useIntroduceFormStore } from "@/store/introduceFormStore";
import { useCurrentUserStore } from "@/store/currentUserStore";

const DashboardMessageButtons = () => {
    const { user } = useCurrentUserStore();
    const { setName, setOccupation, setKeywords, setBriefIntroduction, setIntroduction } =
        useIntroduceFormStore();

    useEffect(() => {
        const fetchData = async () => {
            const myCardData = (await fetchCurrentUserInfo(user.token)).data;
            setName(myCardData.user.name);
            setOccupation(myCardData.occupation);
            setKeywords(myCardData.keywords);
            setBriefIntroduction(myCardData.briefIntroduction);
            setIntroduction(myCardData.introduction);
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col">
            <Link href="/main/introduce">
                <button className="bg-[#7A34F2] rounded-[20px] text-white text-xs font-[700] px-8 py-4">
                    카드 수정하기
                </button>
            </Link>
        </div>
    );
};

export default DashboardMessageButtons;
