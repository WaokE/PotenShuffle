import TopNavigationBar from "./TopNavigationBar";
import TempCard from "./TempCard";
import CardWrapper from "./CardWrapper";

export default function MainContent() {
    return (
        <div className="flex flex-col gap-8 w-2/3 h-full">
            <TempCard />
            <CardWrapper />
        </div>
    );
}
