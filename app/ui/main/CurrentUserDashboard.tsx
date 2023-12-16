// Framwork APIs
import { useEffect } from "react";

// Componenets
import MyCard from "./Mycard";
import MainBanner from "./MainBanner";

// State stores
import useStore from "@/store/useStore";
import { useCurrentUserStore } from "@/store/currentUserStore";

// APIs
import { fetchCurrentUserInfo } from "@/app/api/fetchData";

// Functions
import { validLogin } from "@/app/lib/vaildLogin";

const CurrentUserDashboard = () => {
    const store = useCurrentUserStore((state) => state);

    useEffect(() => {
        const fetchData = async () => {
            const myCardData = (await fetchCurrentUserInfo(store.user!.token)).data;
            store.setCardData(myCardData);
        };

        fetchData();
    }, []);
    return (
        <>
            {!validLogin(store.user?.tokenExpire!) || store.user?.cardData === undefined ? (
                <MainBanner />
            ) : (
                <MyCard />
            )}
        </>
    );
};

export default CurrentUserDashboard;
