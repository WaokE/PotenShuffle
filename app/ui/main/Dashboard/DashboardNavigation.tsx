import { useDashboardStore, NavigationElement } from "@/store/dashboardStore";

const DashBoardNavigation = () => {
    const { setSelectedNavigation, selectedNavigation } = useDashboardStore();

    const getNavItemStyles = (navigationType: NavigationElement) => {
        if (selectedNavigation === navigationType) {
            return "rounded-2xl shadow border";
        }
        return "bg-white text-black";
    };

    return (
        <div className="flex flex-col p-4 gap-4">
            <div
                className={`w-full h-auto p-4 font-[700] ${getNavItemStyles("myIntroduce")}`}
                onClick={() => {
                    setSelectedNavigation("myIntroduce");
                }}
            >
                나의 자기 소개
            </div>
            <div
                className={`flex w-full h-auto p-4 font-[700] ${getNavItemStyles("receivedOffer")}`}
                onClick={() => {
                    setSelectedNavigation("receivedOffer");
                }}
            >
                받은 제안
            </div>
            <div
                className={`flex w-full h-auto p-4 font-[700] ${getNavItemStyles("sentOffer")}`}
                onClick={() => {
                    setSelectedNavigation("sentOffer");
                }}
            >
                보낸 제안
            </div>
        </div>
    );
};

export default DashBoardNavigation;
