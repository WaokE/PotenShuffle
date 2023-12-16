// Framwork APIs
import { useEffect, useState } from "react";

// APIs
import { fetchCurrentUserInfo } from "@/app/api/fetchData";

// Types
import { userInfo } from "@/type/user";

// Components
import Card from "./Cards/Card";

// State stores
import { useCurrentUserStore } from "@/store/currentUserStore";

const MyCard = () => {
    const [userData, setUserData] = useState<userInfo>();
    const { user } = useCurrentUserStore();

    useEffect(() => {
        const fetchData = async () => {
            const myCardData = (await fetchCurrentUserInfo(user.token)).data;
            setUserData(myCardData);
        };

        fetchData();
    }, []);

    return <>{userData ? <Card cardData={userData} /> : <p>no Card</p>}</>;
};

export default MyCard;
