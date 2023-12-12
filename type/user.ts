// EmploymentStatus에 대한 상수 배열과 타입 정의
export const EMPLOYMENT_STATUS_VALUES = [
    "NONE",
    "CURRENTLY_WORKING",
    "LOOKING_FOR_JOB",
    "PREPARING_FOR_EMPLOYMENT",
] as const;

export type EmploymentStatusType = (typeof EMPLOYMENT_STATUS_VALUES)[number];

// Occupation에 대한 상수 배열과 타입 정의
export const OCCUPATION_VALUES = [
    "NONE",
    "PRODUCT_MANAGER",
    "DESIGNER",
    "SERVER_ENGINEER",
    "WEB_ENGINEER",
    "AOS_ENGINEER",
    "IOS_ENGINEER",
] as const;

export type OccupationType = (typeof OCCUPATION_VALUES)[number];

// userInfo 타입 정의
export type userInfo = {
    user: {
        id: number;
        name: string;
    };
    briefIntroduction: string;
    preferredTeamMember: string;
    availableParticipationTime: string;
    employmentStatus: EmploymentStatusType;
    occupation: OccupationType;
    participationPurpose: string;
    keywords: string[];
    strengths: string[];
    skills: string[];
    createdAt: string;
    updatedAt: string;
};
