import { create } from "zustand";

type filterStore = {
    isModalOpen: boolean;
    toggleIsModalOpen: () => void;
    selectedFilter: string[];
    addSelectedFilter: (filter: string) => void;
    removeSelectedFilter: (filter: string) => void;
    toggleSelectedFilter: (filter: string) => void;
};

export const useFilterStore = create<filterStore>((set) => ({
    isModalOpen: false,
    toggleIsModalOpen: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
    selectedFilter: [],
    addSelectedFilter: (filter) =>
        set((state) => ({
            selectedFilter: [...state.selectedFilter, filter],
        })),
    removeSelectedFilter: (filter) =>
        set((state) => ({
            selectedFilter: state.selectedFilter.filter(
                (selectedFilter) => selectedFilter !== filter
            ),
        })),
    toggleSelectedFilter: (filter) =>
        set((state) => ({
            selectedFilter: state.selectedFilter.includes(filter)
                ? state.selectedFilter.filter((selectedFilter) => selectedFilter !== filter)
                : [...state.selectedFilter, filter],
        })),
}));
