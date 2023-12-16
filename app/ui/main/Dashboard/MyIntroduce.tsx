// Components
import MyCard from "../Mycard";
import DashboardMessage from "./DashboardMessage";

const MyIntroduce = () => {
    return (
        <>
            <div className="w-1/2">
                <MyCard />
            </div>
            <div className="w-1/2">
                <DashboardMessage />
            </div>
        </>
    );
};

export default MyIntroduce;
