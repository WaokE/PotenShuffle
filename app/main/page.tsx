import MainContent from "../ui/main/MainContent";
import MainFooter from "../ui/main/MainFooter";

export default function MainPage() {
    return (
        <div className="flex flex-col items-center">
            <MainContent />
            <MainFooter />
        </div>
    );
}
