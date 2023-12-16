"use client";

// Components
import Filter from "./Filter/Filter";
import FilterModal from "./Filter/FilterModal";
import CardWrapper from "./Cards/CardWrapper";
import CurrentUserDashboard from "./CurrentUserDashboard";
import MidNavigationBar from "./MidNavigationBar";

// State stores
import { useFilterStore } from "@/store/filterStore";

export default function MainContent() {
    const { isModalOpen } = useFilterStore();

    return (
        <div className="flex flex-col gap-8 w-2/3 h-full">
            <CurrentUserDashboard />
            <MidNavigationBar />
            <Filter />
            {isModalOpen && <FilterModal />}
            <CardWrapper />
        </div>
    );
}
