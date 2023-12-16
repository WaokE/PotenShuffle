"use client";

import { useEffect } from "react";

// Components
import MainBanner from "./MainBanner";
import Filter from "./Filter/Filter";
import FilterModal from "./Filter/FilterModal";
import CardWrapper from "./Cards/CardWrapper";
import CurrentUserDashboard from "./CurrentUserDashboard";
import MidNavigationBar from "./MidNavigationBar";

// State stores
import useStore from "@/store/useStore";
import { useFilterStore } from "@/store/filterStore";
import { useCurrentUserStore } from "@/store/currentUserStore";

// APIs
import { fetchCurrentUserInfo } from "@/app/api/fetchData";

// Functions
import { validLogin } from "@/app/lib/vaildLogin";

export default function MainContent() {
    const { isModalOpen } = useFilterStore();
    const user = useStore(useCurrentUserStore, (state) => state.user);
    const setCardData = useStore(useCurrentUserStore, (state) => state.setCardData);

    useEffect(() => {
        const fetchData = async () => {
            if (!user || !setCardData) return;
            const myCardData = (await fetchCurrentUserInfo(user.token)).data;

            setCardData(myCardData);
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col gap-8 w-2/3 h-full">
            {validLogin(user?.tokenExpire!) && !user?.cardData ? (
                <CurrentUserDashboard />
            ) : (
                <MainBanner />
            )}
            <MidNavigationBar />
            <Filter />
            {isModalOpen && <FilterModal />}
            <CardWrapper />
        </div>
    );
}
