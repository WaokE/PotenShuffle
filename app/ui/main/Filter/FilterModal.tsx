"use client";

import { useFilterStore } from "@/store/filterStore";

import FilterModalCategoryContainer from "./FilterModalCategoryContainer";

const FilterModal = () => {
    const { toggleIsModalOpen } = useFilterStore();
    const closeModal = () => {
        toggleIsModalOpen();
    };

    return (
        <div
            id="modalBackdrop"
            className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
            onClick={closeModal}
        >
            <div
                className="flex flex-col gap-4 bg-white w-auto rounded-lg shadow-lg p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <FilterModalCategoryContainer categotyName="ocucupation" />
                <FilterModalCategoryContainer categotyName="career" />
                <FilterModalCategoryContainer categotyName="teamBuildingStatus" />
                <div className="flex justify-center w-auto">
                    <button
                        className="bg-[#7A34F2] rounded-[20px] text-white font-[700] p-4 w-1/5"
                        onClick={() => {
                            toggleIsModalOpen();
                        }}
                    >
                        저장하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
