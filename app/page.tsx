import TopNavigationBar from "./ui/home/TopNavigationBar";
import MainContent from "./ui/home/MainContent";

export default function Home() {
    return (
        <div className="flex flex-col gap-8 items-center min-h-screen w-screen">
            <TopNavigationBar />
            <MainContent />
        </div>
    );
}
