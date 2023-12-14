import { create } from "zustand";

type loginStore = {
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
};

export const useLoginStore = create<loginStore>((set) => ({
    email: "",
    password: "",
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
}));
