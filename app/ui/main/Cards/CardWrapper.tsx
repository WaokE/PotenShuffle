"use client";
// Framwork APIs
import { useEffect } from "react";

// Components
import Card from "./Card";
import CardModal from "./CardModal";
import ReconfirmModal from "../ReconfirmModal";

// State stores
import { useState } from "react";
import { useCardModalStore } from "@/store/cardModalStore";
import { useFilterStore } from "@/store/filterStore";
import { useReconfirmModalStore } from "@/store/reconfirmModalStore";

// Types
import { userInfo } from "@/type/user";

// APIs
import { fetchAllUserInfo } from "@/app/api/fetchData";

export default function CardWrapper() {
    const { isModalOpen } = useCardModalStore();
    const { selectedFilter } = useFilterStore();
    const { isReconfirmModalOpen } = useReconfirmModalStore();
    const [allUserInfo, setAllUserInfo] = useState<userInfo[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchAllUserInfo();
            setAllUserInfo(data.data.items);
        }

        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {allUserInfo
                .filter((userInfo) => {
                    return (
                        selectedFilter.length === 0 ||
                        selectedFilter.includes(userInfo.occupation) ||
                        selectedFilter.includes(userInfo.employmentStatus) ||
                        selectedFilter.includes(userInfo.user.teamBuildingStatus)
                    );
                })
                .map((userInfo) => (
                    <Card cardData={userInfo} key={userInfo.user.id} />
                ))}
            {isModalOpen && <CardModal />}
            {isReconfirmModalOpen && <ReconfirmModal />}
        </div>
    );
}
