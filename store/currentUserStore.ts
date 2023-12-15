import { create } from "zustand";
import { persist } from "zustand/middleware";

type user = {
    name: string;
    email: string;
    token: string;
    tokenExpire: Date;
};

type currentUserStore = {
    user: user;
    setUser: (user: user) => void;
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
            },
            setUser: (user) => {
                set({ user });
            },
            logout: () => {
                set({
                    user: {
                        name: "",
                        email: "",
                        token: "",
                        tokenExpire: new Date(0),
                    },
                });
            },
        }),
        {
            name: "user-storage",
        }
    )
);
