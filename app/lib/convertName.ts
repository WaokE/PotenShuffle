import { TeamBuildingStatusType, OccupationType, EmploymentStatusType } from "@/type/user";

export const convertTeamBuildingStatus = (teamBuildingStatus: TeamBuildingStatusType) => {
    switch (teamBuildingStatus) {
        case "WAITING":
            return "빌딩 전";
        case "IN_PROGRESS":
            return "빌딩 중";
        case "COMPLETED":
            return "빌딩 완료";
        default:
            return "알 수 없음";
    }
};

export const convertOccupation = (occupation: OccupationType) => {
    switch (occupation) {
        case "NONE":
            return "직군";
        case "PRODUCT_MANAGER":
            return "기획자";
        case "DESIGNER":
            return "디자이너";
        case "SERVER_ENGINEER":
            return "서버 개발자";
        case "WEB_ENGINEER":
            return "웹 개발자";
        case "AOS_ENGINEER":
            return "안드로이드 개발자";
        case "IOS_ENGINEER":
            return "IOS 개발자";
    }
};

export const convertEmploymentStatus = (employmentStatus: EmploymentStatusType) => {
    switch (employmentStatus) {
        case "NONE":
            return "정보 없음";
        case "CURRENTLY_WORKING":
            return "재직중";
        case "LOOKING_FOR_JOB":
            return "구직중";
        case "PREPARING_FOR_EMPLOYMENT":
            return "취업 준비중";
    }
};

export const convertCategoryName = (category: string) => {
    switch (category) {
        case "occupation":
            return "직군";
        case "career":
            return "경력(Status)";
        case "teamBuildingStatus":
            return "팀빌딩 상태";
    }
};
