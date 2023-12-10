import TempCard from "./IntroCard";
import Filter from "./Filter/Filter";
import CardWrapper from "./CardWrapper";

export default function MainContent() {
    return (
        <div className="flex flex-col gap-8 w-2/3 h-full">
            <TempCard />
            <Filter />
            <CardWrapper />
        </div>
    );
}
