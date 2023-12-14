import Chip from "../Chip";

import {
    convertTeamBuildingStatus,
    convertEmploymentStatus,
    convertOccupation,
    convertCategoryName,
} from "@/app/lib/convertName";
import { TeamBuildingStatusType, OccupationType, EmploymentStatusType } from "@/type/user";

import { useFilterStore } from "@/store/filterStore";

type FilterModalCategoryContainerProps = {
    categotyName: string;
};

const ocucupation = [
    "WEB_ENGINEER",
    "IOS_ENGINEER",
    "AOS_ENGINEER",
    "SERVER_ENGINEER",
    "DESIGNER",
    "PRODUCT_MANAGER",
];
const career = ["PREPARING_FOR_EMPLOYMENT", "LOOKING_FOR_JOB", "CURRENTLY_WORKING"];
const teamBuildingStatus = ["WAITING", "IN_PROGRESS", "COMPLETED"];

const FilterModalCategoryContainer: React.FC<FilterModalCategoryContainerProps> = ({
    categotyName,
}) => {
    const { selectedFilter, toggleSelectedFilter } = useFilterStore();
    return (
        <div className="flex flex-col gap-2">
            <p className="font-[700]">{convertCategoryName(categotyName)}</p>
            <div className="flex gap-2">
                {categotyName === "occupation" &&
                    ocucupation.map((item, index) => {
                        return (
                            <Chip
                                key={index}
                                label={convertOccupation(item as OccupationType)}
                                onClick={() => {
                                    toggleSelectedFilter(item);
                                }}
                                bgColor={selectedFilter.includes(item) ? "#F6EFFF" : "#FFFFFF"}
                                textColor={selectedFilter.includes(item) ? "#7A34F2" : "#121213"}
                                borderColor={selectedFilter.includes(item) ? "#7A34F2" : "#E0E0E0"}
                            />
                        );
                    })}
                {categotyName === "career" &&
                    career.map((item, index) => {
                        return (
                            <Chip
                                key={index}
                                label={convertEmploymentStatus(item as EmploymentStatusType)}
                                onClick={() => {
                                    toggleSelectedFilter(item);
                                }}
                                bgColor={selectedFilter.includes(item) ? "#F6EFFF" : "#FFFFFF"}
                                textColor={selectedFilter.includes(item) ? "#7A34F2" : "#121213"}
                                borderColor={selectedFilter.includes(item) ? "#7A34F2" : "#E0E0E0"}
                            />
                        );
                    })}
                {categotyName === "teamBuildingStatus" &&
                    teamBuildingStatus.map((item, index) => {
                        return (
                            <Chip
                                key={index}
                                label={convertTeamBuildingStatus(item as TeamBuildingStatusType)}
                                onClick={() => {
                                    toggleSelectedFilter(item);
                                }}
                                bgColor={selectedFilter.includes(item) ? "#F6EFFF" : "#FFFFFF"}
                                textColor={selectedFilter.includes(item) ? "#7A34F2" : "#121213"}
                                borderColor={selectedFilter.includes(item) ? "#7A34F2" : "#E0E0E0"}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default FilterModalCategoryContainer;
