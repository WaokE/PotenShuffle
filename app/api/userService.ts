import axios from "axios";

import { userInfo } from "@/type/user";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const modifyTeamBuildingStatus = (teamBuildingStatus: string) => {
    if (
        teamBuildingStatus === "WAITING" ||
        teamBuildingStatus === "IN_PROGRESS" ||
        teamBuildingStatus === "COMPLETED"
    ) {
        return axios.patch(serverUrl + "/users/me/team-building-status", {
            params: {
                teamBuildingStatus: teamBuildingStatus,
            },
        });
    } else {
        throw new Error("Invalid teamBuildingStatus");
    }
};

export const updateMyCard = async (userInfo: userInfo, token: string) => {
    try {
        const response = await axios.patch(
            process.env.NEXT_PUBLIC_SERVER_URL + "/users/me/information",
            userInfo,
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
