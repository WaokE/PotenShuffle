"use client";

import Card from "./Card";
import CardModal from "./CardModal";

import { useCardModalStore } from "@/store/cardModalStore";

import { sampleUsersInfo } from "@/type/sampleData";

export default function CardWrapper() {
    const { isModalOpen, setIsModalOpen, selectedCardData } = useCardModalStore();
    return (
        <div className="grid grid-cols-3 gap-4">
            {sampleUsersInfo.map((userInfo) => (
                <Card cardData={userInfo} key={userInfo.user.id} />
            ))}
            {isModalOpen && <CardModal />}
        </div>
    );
}
