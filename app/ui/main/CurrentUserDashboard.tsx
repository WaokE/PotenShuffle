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
    // const store = useCurrentUserStore((state) => state);
    const store = useStore(useCurrentUserStore, (state) => state);

    useEffect(() => {
        if (!store) return;
        const fetchData = async () => {
            const myCardData = (await fetchCurrentUserInfo(store.user!.token)).data;
            store.setCardData(myCardData);
        };

        fetchData();
    }, [store]);
    return (
        <>
            {store ? (
                !validLogin(store.user?.tokenExpire!) ||
                store.user?.cardData?.introduction === "" ? (
                    <MainBanner />
                ) : (
                    <MyCard />
                )
            ) : null}
        </>
    );
};

export default CurrentUserDashboard;
