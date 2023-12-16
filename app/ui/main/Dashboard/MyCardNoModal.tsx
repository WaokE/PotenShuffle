// Framwork APIs
import { useEffect, useState } from "react";

// APIs
import { fetchCurrentUserInfo } from "@/app/api/fetchData";

// Types
import { userInfo } from "@/type/user";

// Components
import CardNoModal from "./CardNoModal";

// State stores
import { useCurrentUserStore } from "@/store/currentUserStore";

const MyCardNoModal = () => {
    const [userData, setUserData] = useState<userInfo>();
    const { user } = useCurrentUserStore();

    useEffect(() => {
        const fetchData = async () => {
            const myCardData = (await fetchCurrentUserInfo(user.token)).data;
            setUserData(myCardData);
        };

        fetchData();
    }, []);

    return <>{userData ? <CardNoModal cardData={userData} /> : <p>no Card</p>}</>;
};

export default MyCardNoModal;
