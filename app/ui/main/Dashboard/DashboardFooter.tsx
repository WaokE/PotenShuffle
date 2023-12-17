import DashboardMessage from "./DashboardMessage";
import DashboardMessageButtons from "./DashboardMessageButtons";

const DashboardFooter = () => {
    return (
        <div className="flex flex-col h-full justify-between select-none">
            <DashboardMessage />
            <DashboardMessageButtons />
        </div>
    );
};

export default DashboardFooter;
