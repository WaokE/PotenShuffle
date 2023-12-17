import { create } from "zustand";

import { userInfo } from "@/type/user";

type offerModalStore = {
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
    selectedOfferId: number;
    setSelectedOfferId: (selectedOfferId: number) => void;
    selectedOfferCard: userInfo;
    setSelectedOfferCard: (selectedOfferCard: userInfo) => void;
};

export const useOfferModalStore = create<offerModalStore>((set) => ({
    isModalOpen: false,
    setIsModalOpen: (isModalOpen) => {
        set({ isModalOpen });
    },
    selectedOfferId: -1,
    setSelectedOfferId: (selectedOfferId) => {
        set({ selectedOfferId });
    },
    selectedOfferCard: {} as userInfo,
    setSelectedOfferCard: (selectedOfferCard) => {
        set({ selectedOfferCard });
    },
}));
