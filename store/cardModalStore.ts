import { create } from "zustand";

import { userInfo } from "@/type/user";

type cardModalStore = {
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
    selectedCardData: userInfo;
    setSelectedCardData: (selectedCardData: userInfo) => void;
};

export const useCardModalStore = create<cardModalStore>((set) => ({
    isModalOpen: false,
    setIsModalOpen: (isModalOpen) => {
        set({ isModalOpen });
    },
    selectedCardData: {
        user: {
            id: -1,
            name: "",
            teamBuildingStatus: "WAITING",
        },
        briefIntroduction: "",
        introduction: "",
        preferredTeamMember: "",
        availableParticipationTime: "",
        employmentStatus: "NONE",
        occupation: "NONE",
        participationPurpose: "",
        keywords: [],
        strengths: [],
        skills: [],
        createdAt: "",
        updatedAt: "",
    },
    setSelectedCardData: (selectedCardData) => {
        set({ selectedCardData });
    },
}));
