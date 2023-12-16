import DashboardMessage from "./DashboardMessage";
import DashboardMessageButtons from "./DashboardMessageButtons";

const DashboardFooter = () => {
    return (
        <div className="flex flex-col h-full justify-between">
            <DashboardMessage />
            <DashboardMessageButtons />
        </div>
    );
};

export default DashboardFooter;
