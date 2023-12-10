import MainBanner from "./MainBanner";
import Filter from "./Filter/Filter";
import CardWrapper from "./Cards/CardWrapper";

export default function MainContent() {
    return (
        <div className="flex flex-col gap-8 w-2/3 h-full">
            <MainBanner />
            <Filter />
            <CardWrapper />
        </div>
    );
}
