import axios from "axios";

import { fetchUsersFilter } from "@/type/fetchData";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const fetchCurrentUserInfo = () => {
    return axios.get(serverUrl + "/users/me/information");
};

export const fetchSpecificUserInfo = (userId: string) => {
    return axios.get(serverUrl + "/users/" + userId + "/information");
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
