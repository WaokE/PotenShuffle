import Chip from "../Chip";

import { useFilterStore } from "@/store/filterStore";

export default function Filter() {
    const { isModalOpen, toggleIsModalOpen, selectedFilter } = useFilterStore();
    return (
        <div className="flex gap-2">
            {selectedFilter.map((item, index) => {
                return (
                    <Chip
                        key={index}
                        label={item}
                        onClick={() => {
                            toggleIsModalOpen();
                        }}
                        bgColor={"#F6EFFF"}
                        textColor={"#7A34F2"}
                        borderColor={"#7A34F2"}
                    />
                );
            })}
            <div className="ml-auto">
                <Chip
                    label="필터"
                    onClick={() => {
                        toggleIsModalOpen();
                    }}
                    bgColor={isModalOpen ? "#F6EFFF" : "#FFFFFF"}
                    textColor={isModalOpen ? "#7A34F2" : "#121213"}
                    borderColor={isModalOpen ? "#7A34F2" : "#E0E0E0"}
                />
            </div>
        </div>
    );
}
