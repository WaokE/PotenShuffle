import axios from "axios";

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
