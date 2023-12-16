// Components
import MyCardNoModal from "./MyCardNoModal";
import DashboardMessage from "./DashboardMessage";

const MyIntroduce = () => {
    return (
        <>
            <div className="w-1/2">
                <MyCardNoModal />
            </div>
            <div className="w-1/2">
                <DashboardMessage />
            </div>
        </>
    );
};

export default MyIntroduce;
