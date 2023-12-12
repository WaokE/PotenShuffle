"use client";

import { useFilterStore } from "@/store/filterStore";

import FilterModalCategoryContainer from "./FilterModalCategoryContainer";

const FilterModal = () => {
    const { setIsModalOpen } = useFilterStore();
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div
            id="modalBackdrop"
            className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
            onClick={closeModal}
        >
            <div
                className="flex flex-col gap-4 bg-white w-auto rounded-lg shadow-lg p-8"
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 버블링 방지
            >
                <FilterModalCategoryContainer categotyName="ocucupation" />
                <FilterModalCategoryContainer categotyName="career" />
                <FilterModalCategoryContainer categotyName="teamBuildingStatus" />
            </div>
        </div>
    );
};

export default FilterModal;
