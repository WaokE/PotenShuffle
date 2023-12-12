"use client";

import MainBanner from "./MainBanner";
import Filter from "./Filter/Filter";
import FilterModal from "./Filter/FilterModal";
import CardWrapper from "./Cards/CardWrapper";

import { useFilterStore } from "@/store/filterStore";

export default function MainContent() {
    const { selectedFilter, isModalOpen } = useFilterStore();
    return (
        <div className="flex flex-col gap-8 w-2/3 h-full">
            <MainBanner />
            <Filter />
            {isModalOpen && <FilterModal />}
            <CardWrapper />
        </div>
    );
}
