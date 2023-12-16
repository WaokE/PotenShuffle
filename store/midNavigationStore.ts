import { create } from "zustand";

export type SectionType = "personalCards" | "buildingTeams";

type MidNavigationStore = {
    selectedSection: SectionType;
    setSelectedSection: (section: SectionType) => void;
};

export const useMidNavigationStore = create<MidNavigationStore>((set) => ({
    selectedSection: "personalCards",
    setSelectedSection: (section) => set({ selectedSection: section }),
}));
