import axios from "axios";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const fetchCurrentUserInfo = () => {
    return axios.get(serverUrl + "/users/me/information");
};

export const fetchSpecificUserInfo = (userId: string) => {
    return axios.get(serverUrl + "/users/" + userId + "/information");
};
