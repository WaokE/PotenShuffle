import { useEffect, useState } from "react";

import { fetchCurrentUserInfo } from "@/app/api/fetchData";

import { userInfo } from "@/type/user";

import Card from "./Cards/Card";

import { useCurrentUserStore } from "@/store/currentUserStore";

import axios from "axios";

const Mycard = () => {
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

export default Mycard;
