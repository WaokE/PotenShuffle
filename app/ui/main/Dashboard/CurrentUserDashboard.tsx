// Componenets
import DashBoardNavigation from "./DashboardNavigation";
import MyIntroduce from "./MyIntroduce";
import ReceivedOffers from "./ReceivedOffers";
import SentOffers from "./SentOffers";

// State stores
import { useDashboardStore } from "@/store/dashboardStore";

const CurrentUserDashboard = () => {
    const { selectedNavigation } = useDashboardStore();
    return (
        <div className="flex">
            <div className="w-1/3">
                <DashBoardNavigation />
            </div>
            <div className="w-2/3 flex p-4 gap-4 bg-[#FBFBFB]">
                {selectedNavigation === "myIntroduce" && <MyIntroduce />}
                {selectedNavigation === "receivedOffer" && <ReceivedOffers />}
                {selectedNavigation === "sentOffer" && <SentOffers />}
            </div>
        </div>
    );
};

export default CurrentUserDashboard;
