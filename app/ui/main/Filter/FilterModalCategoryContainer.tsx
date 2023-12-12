import Chip from "../Chip";

import { useFilterStore } from "@/store/filterStore";

type FilterModalCategoryContainerProps = {
    categotyName: string;
};

const ocucupation = [
    "웹 개발자",
    "IOS 개발자",
    "Andriod 개발자",
    "서버 개발자",
    "디자이너",
    "기획자",
];
const career = ["취준생", "구직자", "현업자"];
const teamBuildingStatus = ["빌딩 전", "빌딩 중", "빌딩 완료"];

const FilterModalCategoryContainer: React.FC<FilterModalCategoryContainerProps> = ({
    categotyName,
}) => {
    const { selectedFilter, toggleSelectedFilter } = useFilterStore();
    return (
        <div className="flex flex-col gap-2">
            <p className="font-[700]">{categotyName}</p>
            <div className="flex gap-2">
                {categotyName === "ocucupation" &&
                    ocucupation.map((item, index) => {
                        return (
                            <Chip
                                key={index}
                                label={item}
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
                                label={item}
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
                                label={item}
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
