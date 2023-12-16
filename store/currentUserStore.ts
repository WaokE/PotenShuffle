import { create } from "zustand";
import { persist } from "zustand/middleware";

import { userInfo } from "@/type/user";

type user = {
    name: string;
    email: string;
    token: string;
    tokenExpire: Date;
    cardData: userInfo | undefined;
};

type currentUserStore = {
    user: user;
    setUser: (user: user) => void;
    setCardData: (cardData: userInfo) => void;
    logout: () => void;
};

export const useCurrentUserStore = create<currentUserStore>()(
    persist(
        (set) => ({
            user: {
                name: "",
                email: "",
                token: "",
                tokenExpire: new Date(0),
                cardData: undefined,
            },
            setUser: (user) => {
                set({ user });
            },
            setCardData: (cardData) => {
                set((state) => ({
                    user: {
                        ...state.user,
                        cardData,
                    },
                }));
            },
            logout: () => {
                set({
                    user: {
                        name: "",
                        email: "",
                        token: "",
                        tokenExpire: new Date(0),
                        cardData: undefined,
                    },
                });
            },
        }),
        {
            name: "user-storage",
        }
    )
);
