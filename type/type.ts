export type fetchUsersFilter = {
    employmentStatus: "NONE" | "CURRENTLY_WORKING" | "LOOKING_FOR_JOB" | "PREPARING_FOR_EMPLOYMENT";
    teampBuildingStatus: "WAITING" | "IN_PROGRESS" | "COMPLETED";
    occupation:
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

export type userInfo = {
    user: {
        id: number;
        name: string;
    };
    briefIntroduction: string;
    preferredTeamMember: string;
    availableParticipationTime: string;
    employmentStatus: "NONE" | "CURRENTLY_WORKING" | "LOOKING_FOR_JOB" | "PREPARING_FOR_EMPLOYMENT";
    occupation:
        | "NONE"
        | "PRODUCT_MANAGER"
        | "DESIGNER"
        | "SERVER_ENGINEER"
        | "WEB_ENGINEER"
        | "AOS_ENGINEER"
        | "IOS_ENGINEER";
    participationPurpose: string;
    keywords: string[];
    strengths: string[];
    skills: string[];
    createdAt: string;
    updatedAt: string;
};
