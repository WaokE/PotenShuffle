"use client";

// Components
import MainBanner from "./MainBanner";
import Filter from "./Filter/Filter";
import FilterModal from "./Filter/FilterModal";
import CardWrapper from "./Cards/CardWrapper";
import CurrentUserDashboard from "./CurrentUserDashboard";

// State stores
import useStore from "@/store/useStore";
import { useFilterStore } from "@/store/filterStore";
import { useCurrentUserStore } from "@/store/currentUserStore";

// Functions
import { validLogin } from "@/app/lib/vaildLogin";

export default function MainContent() {
    const { isModalOpen } = useFilterStore();
    const user = useStore(useCurrentUserStore, (state) => state.user);

    return (
        <div className="flex flex-col gap-8 w-2/3 h-full">
            {validLogin(user?.tokenExpire!) ? <CurrentUserDashboard /> : <MainBanner />}
            <Filter />
            {isModalOpen && <FilterModal />}
            <CardWrapper />
        </div>
    );
}
