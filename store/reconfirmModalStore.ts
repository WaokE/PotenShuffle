import { create } from "zustand";

type ReconfirmModalStore = {
    isReconfirmModalOpen: boolean;
    toggleReconfirmModal: () => void;
};

export const useReconfirmModalStore = create<ReconfirmModalStore>((set) => ({
    isReconfirmModalOpen: false,
    toggleReconfirmModal: () =>
        set((state) => ({
            isReconfirmModalOpen: !state.isReconfirmModalOpen,
        })),
}));
