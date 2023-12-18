import { create } from "zustand";

type addKeywordStore = {
    isModalOpen: boolean;
    toggleModal: () => void;
    userKeywordInput: string;
    setUserKeywordInput: (userKeywordInput: string) => void;
};

export const useAddKeywordStore = create<addKeywordStore>((set) => ({
    isModalOpen: false,
    toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
    userKeywordInput: "",
    setUserKeywordInput: (userKeywordInput) => {
        set({ userKeywordInput });
    },
}));
