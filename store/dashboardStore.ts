import { create } from "zustand";

import { userInfo } from "@/type/user";

export type NavigationElement = "myIntroduce" | "receivedOffer" | "sentOffer";

export type ReceivedOffer = {
    id: number;
    receivedAt: string;
    sentUser: {
        id: number;
        name: string;
        card: userInfo;
    };
    sentUserTeamMembers: {
        id: number;
        name: string;
        card: userInfo;
    }[];
    status: "NONE" | "PENDING" | "ACCEPTED" | "DECLINED";
};

type DashboardStore = {
    selectedNavigation: NavigationElement;
    setSelectedNavigation: (navigation: NavigationElement) => void;
    receivedOffers: ReceivedOffer[];
    setReceivedOffers: (receivedOffers: ReceivedOffer[]) => void;
};

export const useDashboardStore = create<DashboardStore>((set) => ({
    selectedNavigation: "myIntroduce",
    setSelectedNavigation: (navigation) => set({ selectedNavigation: navigation }),
    receivedOffers: [],
    setReceivedOffers: (receivedOffers) => set({ receivedOffers }),
}));
