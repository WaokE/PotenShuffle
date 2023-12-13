import { create } from "zustand";

type signInStore = {
    email: string;
    password: string;
    name: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setName: (name: string) => void;
};

export const useSignInStore = create<signInStore>((set) => ({
    email: "",
    password: "",
    name: "",
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    setName: (name) => set({ name }),
}));
