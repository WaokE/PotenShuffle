import { create } from "zustand";

type UserType = "bot" | "user";
type ChatData = {
    content: string;
    role: UserType;
};

type ChatbotStore = {
    chatId: number;
    setChatId: (id: number) => void;
    userInput: string;
    setUserInput: (input: string) => void;
    chatMessages: ChatData[];
    addChatMessage: (message: ChatData) => void;
    setChatMessages: (messages: ChatData[]) => void;
    chatResult:
        | {
              introduction: string;
              briefIntroduction: string;
              keywords: string[];
          }
        | undefined;
    setChatResult: (result: {
        introduction: string;
        briefIntroduction: string;
        keywords: string[];
    }) => void;
};

export const useChatbotStore = create<ChatbotStore>((set) => ({
    chatId: 0,
    setChatId: (id) => set({ chatId: id }),
    userInput: "",
    setUserInput: (input) => set({ userInput: input }),
    chatMessages: [],
    addChatMessage: (message) =>
        set((state) => ({ chatMessages: [...state.chatMessages, message] })),
    setChatMessages: (messages) => set({ chatMessages: messages }),
    chatResult: undefined,
    setChatResult: (result) => set({ chatResult: result }),
}));
