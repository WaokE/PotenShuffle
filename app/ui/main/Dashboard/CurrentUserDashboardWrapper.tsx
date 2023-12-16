// Framwork APIs
import { useEffect } from "react";

// Componenets
import MainBanner from "../MainBanner";
import CurrentUserDashboard from "./CurrentUserDashboard";

// State stores
import useStore from "@/store/useStore";
import { useCurrentUserStore } from "@/store/currentUserStore";

// APIs
import { fetchCurrentUserInfo } from "@/app/api/fetchData";

// Functions
import { validLogin } from "@/app/lib/vaildLogin";

const CurrentUserDashboardWrapper = () => {
    // const store = useCurrentUserStore((state) => state);
    const currentUserStore = useStore(useCurrentUserStore, (state) => state);

    useEffect(() => {
        if (!currentUserStore) return;
        const fetchData = async () => {
            const myCardData = (await fetchCurrentUserInfo(currentUserStore.user!.token)).data;
            currentUserStore.setCardData(myCardData);
        };

        fetchData();
    }, [currentUserStore]);
    return (
        <>
            {currentUserStore ? (
                !validLogin(currentUserStore.user?.tokenExpire!) ||
                currentUserStore.user?.cardData?.introduction === "" ? (
                    <MainBanner />
                ) : (
                    <CurrentUserDashboard />
                )
            ) : null}
        </>
    );
};

export default CurrentUserDashboardWrapper;
