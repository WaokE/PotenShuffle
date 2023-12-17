import { create } from "zustand";

import { userInfo } from "@/type/user";

type offerModalStore = {
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
    selectedOfferCard: userInfo;
    setSelectedOfferCard: (selectedOfferCard: userInfo) => void;
};

export const useOfferModalStore = create<offerModalStore>((set) => ({
    isModalOpen: false,
    setIsModalOpen: (isModalOpen) => {
        set({ isModalOpen });
    },
    selectedOfferCard: {} as userInfo,
    setSelectedOfferCard: (selectedOfferCard) => {
        set({ selectedOfferCard });
    },
}));
