import MyCard from "../Mycard";
import DashboardMessage from "./DashboardMessage";
import DashBoardNavigation from "./DashboardNavigation";

const CurrentUserDashboard = () => {
    return (
        <div className="flex">
            <div className="w-1/3">
                <DashBoardNavigation />
            </div>
            <div className="w-2/3 flex p-4 gap-4 bg-[#FBFBFB]">
                <div className="w-1/2">
                    <MyCard />
                </div>
                <div className="w-1/2">
                    <DashboardMessage />
                </div>
            </div>
        </div>
    );
};

export default CurrentUserDashboard;
