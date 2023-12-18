import { create } from "zustand";

import { OccupationType } from "@/type/user";

type introduceFormStore = {
    name: string;
    setName: (name: string) => void;
    occupation: OccupationType;
    setOccupation: (occupation: OccupationType) => void;
    keywords: string[];
    setKeywords: (keywords: string[]) => void;
    toggleKeyword: (keyword: string) => void;
    briefIntroduction: string;
    setBriefIntroduction: (briefIntroduction: string) => void;
    introduction: string;
    setIntroduction: (introduction: string) => void;
    isAddModalOpen: boolean;
    setIsAddModalOpen: (isAddModalOpen: boolean) => void;
};

export const useIntroduceFormStore = create<introduceFormStore>((set) => ({
    name: "",
    setName: (name) => {
        set({ name });
    },
    occupation: "NONE",
    setOccupation: (occupation) => {
        set({ occupation });
    },
    keywords: [],
    setKeywords: (keywords) => {
        set({ keywords });
    },
    toggleKeyword: (keyword) => {
        set((state) => {
            const keywords = [...state.keywords];
            const index = keywords.indexOf(keyword);
            if (index === -1) {
                keywords.push(keyword);
            } else {
                keywords.splice(index, 1);
            }
            return { keywords };
        });
    },
    briefIntroduction: "",
    setBriefIntroduction: (briefIntroduction) => {
        set({ briefIntroduction });
    },
    introduction: "",
    setIntroduction: (introduction) => {
        set({ introduction });
    },
    isAddModalOpen: false,
    setIsAddModalOpen: (isAddModalOpen) => {
        set({ isAddModalOpen });
    },
}));
