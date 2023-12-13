import IntroduceMessage from "@/app/ui/main/introduce/IntroduceMessage";
import IntroduceFormContainer from "@/app/ui/main/introduce/IntroduceFormContainer";
import ButtonContainer from "@/app/ui/main/introduce/ButtonContainer";

export default function IntroducePage() {
    return (
        <div className="rounded-[20px] flex flex-col gap-8 p-8 mb-8 mt-4 w-2/3 h-auto bg-[#FBFBFB]">
            <IntroduceMessage />
            <IntroduceFormContainer />
            <ButtonContainer />
        </div>
    );
}
