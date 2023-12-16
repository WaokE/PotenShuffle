// Components
import MyCardNoModal from "./MyCardNoModal";
import DashboardFooter from "./DashboardFooter";

const MyIntroduce = () => {
    return (
        <>
            <div className="w-1/2">
                <MyCardNoModal />
            </div>
            <div className="w-1/2">
                <DashboardFooter />
            </div>
        </>
    );
};

export default MyIntroduce;
