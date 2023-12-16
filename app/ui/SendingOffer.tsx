import animation from "./animation.json";
import Lottie from "lottie-react";

const SendingOffer = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50">
            <div className="flex flex-col items-center w-1/3">
                <Lottie animationData={animation} loop={true} />
                <p className="text-[#BDBDBD] font-[400] fixed bottom-40 transform translate-y(-50%)">
                    클로바 AI가 자기소개를 완성하는 중이에요!
                </p>
            </div>
        </div>
    );
};

export default SendingOffer;
