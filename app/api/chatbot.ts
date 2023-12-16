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
                withCredentials: true,
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

export const sendMessage = async (conversationId: number, message: string, token: string) => {
    try {
        const response = await axios.post(
            `${serverUrl}/introduction-guide-conversations/${conversationId}/messages`,
            { message },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        return response.data;
    } catch (error) {
        console.error("Error sending message:", error);
    }
};

export const endConversation = async (conversationId: number, token: string) => {
    try {
        const response = await axios.post(
            `${serverUrl}/introduction-guide-conversations/${conversationId}/complete`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            }
        );

        return response.data;
    } catch (error) {
        console.error("Error ending conversation:", error);
    }
};
