import SampleCard from "./SampleCard";
import IntroduceForm from "./IntroduceForm";

const IntroduceFormContainer = () => {
    return (
        <div className="flex h-full items-center">
            <div className="w-1/3">
                <SampleCard />
            </div>
            <div className="w-2/3">
                <IntroduceForm />
            </div>
        </div>
    );
};

export default IntroduceFormContainer;
