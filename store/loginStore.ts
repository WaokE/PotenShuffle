import { create } from "zustand";

type signInStore = {
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
};

export const useSignInStore = create<signInStore>((set) => ({
    email: "",
    password: "",
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
}));
