import axios from "axios";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const initiateChat = async (token: string) => {
    try {
        const response = await axios.post(
            process.env.NEXT_PUBLIC_SERVER_URL + "/introduction-guide-conversations",
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
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
