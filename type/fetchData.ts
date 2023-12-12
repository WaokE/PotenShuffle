export type fetchUsersFilter = {
    employmentStatus:
        | "--"
        | "NONE"
        | "CURRENTLY_WORKING"
        | "LOOKING_FOR_JOB"
        | "PREPARING_FOR_EMPLOYMENT";
    teampBuildingStatus: "--" | "WAITING" | "IN_PROGRESS" | "COMPLETED";
    occupation:
        | "--"
        | "NONE"
        | "PRODUCT_MANAGER"
        | "DESIGNER"
        | "SERVER_ENGINEER"
        | "WEB_ENGINEER"
        | "AOS ENGINEER"
        | "IOS_ENGINEER";
    page: number;
    size: number;
};
