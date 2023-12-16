import axios from "axios";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const fetchReceivedOffers = async (token: string) => {
    return axios.get(serverUrl + "/users/me/received-team-offers", {
        params: {
            page: 0,
            size: 10,
        },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const fetchSentOffers = async (token: string) => {
    return axios.get(serverUrl + "/users/me/sent-team-offers", {
        params: {
            page: 0,
            size: 10,
        },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

type responseType = "ACCEPT" | "DECLINE";
export const respondToOffer = async (
    token: string,
    teamOfferId: number,
    response: responseType
) => {
    return axios.post(
        `${serverUrl}/received-team-offers/${teamOfferId}/response`,
        {
            responseType: response,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};
