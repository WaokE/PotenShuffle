import { create } from "zustand";

type ChatbotStore = {
    chatId: number;
    setChatId: (id: number) => void;
};
