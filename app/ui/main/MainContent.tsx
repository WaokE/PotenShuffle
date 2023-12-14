"use client";

import useStore from "@/store/useStore";

import MainBanner from "./MainBanner";
import Filter from "./Filter/Filter";
import FilterModal from "./Filter/FilterModal";
import CardWrapper from "./Cards/CardWrapper";
import Mycard from "./Mycard";

import { useFilterStore } from "@/store/filterStore";
import { useCurrentUserStore } from "@/store/currentUserStore";

export default function MainContent() {
    const { selectedFilter, isModalOpen } = useFilterStore();
    const user = useStore(useCurrentUserStore, (state) => state.user);

    return (
        <div className="flex flex-col gap-8 w-2/3 h-full">
            {user ? user.isLoggedIn && <Mycard /> : <MainBanner />}
            <Filter />
            {isModalOpen && <FilterModal />}
            <CardWrapper />
        </div>
    );
}
