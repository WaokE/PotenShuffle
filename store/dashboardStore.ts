import { create } from "zustand";

export type NavigationElement = "myIntroduce" | "receivedOffer" | "sentOffer";

type DashboardStore = {
    selectedNavigation: NavigationElement;
    setSelectedNavigation: (navigation: NavigationElement) => void;
};

export const useDashboardStore = create<DashboardStore>((set) => ({
    selectedNavigation: "myIntroduce",
    setSelectedNavigation: (navigation) => set({ selectedNavigation: navigation }),
}));
