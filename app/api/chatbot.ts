import axios from "axios";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const initiateChat = () => {
    axios.post(serverUrl + "/introduction-guide-conversations");
};

export const getChatMessages = (conversationId: number) => {
    axios.get(serverUrl + "/introduction-guide-conversations/", {
        params: {
            conversationId,
        },
    });
};

export const sendMessage = (conversationId: number, message: string) => {
    axios.post(serverUrl + "/introduction-guide-conversations/", {
        conversationId,
        message,
    });
};
