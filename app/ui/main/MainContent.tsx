"use client";

// Components
import Filter from "./Filter/Filter";
import FilterModal from "./Filter/FilterModal";
import CardWrapper from "./Cards/CardWrapper";
import CurrentUserDashboardWrapper from "./Dashboard/CurrentUserDashboardWrapper";
import MidNavigationBar from "./MidNavigationBar";
import Teams from "./Teams/Teams";

// State stores
import { useFilterStore } from "@/store/filterStore";
import { useMidNavigationStore } from "@/store/midNavigationStore";

export default function MainContent() {
    const { isModalOpen } = useFilterStore();
    const { selectedSection } = useMidNavigationStore();

    return (
        <div className="flex flex-col gap-8 w-2/3 h-full">
            <CurrentUserDashboardWrapper />
            <MidNavigationBar />
            {isModalOpen && <FilterModal />}
            {selectedSection === "personalCards" && (
                <>
                    <Filter />
                    <CardWrapper />
                </>
            )}
            {selectedSection === "buildingTeams" && <Teams />}
        </div>
    );
}
