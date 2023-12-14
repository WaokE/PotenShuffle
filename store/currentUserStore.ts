import { create } from "zustand";
import { persist } from "zustand/middleware";

type user = {
    name: string;
    email: string;
    token: string;
    isLoggedIn: boolean;
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
                isLoggedIn: false,
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
                        isLoggedIn: false,
                    },
                });
            },
        }),
        {
            name: "user-storage",
        }
    )
);
