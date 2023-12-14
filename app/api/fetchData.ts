import axios from "axios";

import { fetchUsersFilter } from "@/type/fetchData";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const fetchCurrentUserInfo = (token: string) => {
    return axios.get(serverUrl + "/users/me/information", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const fetchSpecificUserInfo = (userId: string) => {
    return axios.get(serverUrl + "/users/" + userId + "/information");
};

export const fetchAllUserInfo = () => {
    return axios.get(serverUrl + "/user-cards", {
        params: {
            employmentStatus: "--",
            teamBuildingStatus: "--",
            occupation: "--",
            page: 0,
            size: 10,
        },
    });
};

export const fetchFilteredUserInfo = (filter: fetchUsersFilter) => {
    return axios.get(serverUrl + "/users", {
        params: {
            employmentStatus: filter.employmentStatus,
            teamBuildingStatus: filter.teampBuildingStatus,
            occupation: filter.occupation,
            page: filter.page,
            size: filter.size,
        },
    });
};
