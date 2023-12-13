"use client";

import Card from "./Card";
import CardModal from "./CardModal";
import ReconfirmModal from "../ReconfirmModal";

import { useCardModalStore } from "@/store/cardModalStore";
import { useFilterStore } from "@/store/filterStore";
import { useReconfirmModalStore } from "@/store/reconfirmModalStore";

import { sampleUsersInfo } from "@/type/sampleData";

export default function CardWrapper() {
    const { isModalOpen } = useCardModalStore();
    const { selectedFilter } = useFilterStore();
    const { isReconfirmModalOpen } = useReconfirmModalStore();

    return (
        <div className="grid grid-cols-3 gap-4">
            {sampleUsersInfo
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
