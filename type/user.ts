// TeamBuildingStatus에 대한 상수 배열과 타입 정의
export const TEAMBUILDINGSTATUS_VALUES = ["WAITING", "IN_PROGRESS", "COMPLETED"];

export type TeamBuildingStatusType = (typeof TEAMBUILDINGSTATUS_VALUES)[number];

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

export const PARTICIPATIONPURPOSE_VALUES = ["NONE", "FOR_FUN", "FOR_BUSINESS"];

export type ParticipationPurposeType = (typeof PARTICIPATIONPURPOSE_VALUES)[number];

// userInfo 타입 정의
export type userInfo = {
    user: {
        id: number;
        name: string;
        teamBuildingStatus: TeamBuildingStatusType;
    };
    briefIntroduction: string;
    introduction: string;
    employmentStatus: EmploymentStatusType;
    occupation: OccupationType;
    keywords: string[];
    createdAt: string;
    updatedAt: string;
};

export const dummyUsers: userInfo[] = [
    {
        user: {
            id: 1,
            name: "박종헌",
            teamBuildingStatus: "COMPLETED",
        },
        briefIntroduction: "안녕하세요, 기획자 박종헌입니다.",
        introduction: "2년간 제품 기획자로 일했습니다. 현재는 새로운 도전을 찾고 있습니다.",
        employmentStatus: "CURRENTLY_WORKING",
        occupation: "PRODUCT_MANAGER",
        keywords: ["실무 경험", "열정적인", "경력"],
        createdAt: "2021-08-01",
        updatedAt: "2021-08-01",
    },
    {
        user: {
            id: 2,
            name: "서정민",
            teamBuildingStatus: "IN_PROGRESS",
        },
        briefIntroduction: "반갑습니다. 디자이너로 참가한 서정민입니다.",
        introduction: "좋은 팀을 만나 새로운 도전을 하고 싶습니다.",
        employmentStatus: "LOOKING_FOR_JOB",
        occupation: "DESIGNER",
        keywords: ["Figma", "전공자", "실무 경험"],
        createdAt: "2021-08-01",
        updatedAt: "2021-08-01",
    },
    {
        user: {
            id: 3,
            name: "신문기",
            teamBuildingStatus: "WAITING",
        },
        briefIntroduction: "안녕하세요. 서버 엔지니어 신문기입니다.",
        introduction: "좋은 서비스를 만들어 나갈 열정적인 팀원을 찾고 있습니다.",
        employmentStatus: "PREPARING_FOR_EMPLOYMENT",
        occupation: "SERVER_ENGINEER",
        keywords: ["Java", "Node.js", "인프라"],
        createdAt: "2021-08-01",
        updatedAt: "2021-08-01",
    },
    {
        user: {
            id: 4,
            name: "이형준",
            teamBuildingStatus: "COMPLETED",
        },
        briefIntroduction: "안녕하세요. 웹 엔지니어 이형준입니다.",
        introduction: "좋은 팀원들과 함께 성장하고 싶습니다.",
        employmentStatus: "CURRENTLY_WORKING",
        occupation: "WEB_ENGINEER",
        keywords: ["React", "React Native"],
        createdAt: "2021-08-01",
        updatedAt: "2021-08-01",
    },
];
