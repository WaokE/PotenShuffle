import { TeamBuildingStatusType, OccupationType, EmploymentStatusType } from "@/type/user";
import {
    convertEmploymentStatus,
    convertOccupation,
    convertTeamBuildingStatus,
} from "@/app/lib/convertName";

export const convertChipName = (item: string) => {
    if (isTeamBuildingStatus(item)) {
        return convertTeamBuildingStatus(item);
    } else if (isOccupation(item)) {
        return convertOccupation(item);
    } else if (isEmploymentStatus(item)) {
        return convertEmploymentStatus(item);
    } else {
        throw new Error("Unsupported item type");
    }
};

const isTeamBuildingStatus = (item: string): item is TeamBuildingStatusType => {
    return ["WAITING", "IN_PROGRESS", "COMPLETED"].includes(item);
};

const isOccupation = (item: string): item is OccupationType => {
    return [
        "NONE",
        "PRODUCT_MANAGER",
        "DESIGNER",
        "SERVER_ENGINEER",
        "WEB_ENGINEER",
        "AOS_ENGINEER",
        "IOS_ENGINEER",
    ].includes(item);
};

const isEmploymentStatus = (item: string): item is EmploymentStatusType => {
    return ["NONE", "CURRENTLY_WORKING", "LOOKING_FOR_JOB", "PREPARING_FOR_EMPLOYMENT"].includes(
        item
    );
};
