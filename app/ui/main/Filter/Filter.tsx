import Chip from "../Chip";

import { useFilterStore } from "@/store/filterStore";

export default function Filter() {
    const { isModalOpen, toggleIsModalOpen } = useFilterStore();
    return (
        <div className="flex gap-2">
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
    );
}
