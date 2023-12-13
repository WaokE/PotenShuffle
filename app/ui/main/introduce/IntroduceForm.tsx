import Chip from "../Chip";

const sampleKeywords = ["협업", "기술 이해", "디자인 시스템"];

const IntroduceForm = () => {
    return (
        <div className="flex flex-col gap-8 pl-8 pr-8">
            <div className="flex gap-4 justify-between">
                <div className="flex items-center gap-4 ">
                    <label htmlFor="name" className="font-[700] w-20">
                        이름
                    </label>
                    <input type="text" id="name" className="border rounded-[20px] p-4 w-32 h-14" />
                </div>
                <div className="flex items-center gap-4">
                    <label htmlFor="occupation" className="font-[700]">
                        직무
                    </label>
                    <input
                        type="text"
                        id="occupation"
                        className="border rounded-[20px] p-4 w-32 h-14"
                    />
                </div>
            </div>
            <div className="flex gap-4">
                <p className="font-[700] w-20">나의 키워드</p>
                {sampleKeywords.map((keyword) => (
                    <Chip
                        key={keyword}
                        label={keyword}
                        bgColor="#FFFFFF"
                        textColor="#121213"
                        borderColor="#E0E0E0"
                    />
                ))}
            </div>
            <div className="flex gap-4">
                <label htmlFor="briefIntroduction" className="font-[700] w-20">
                    한 줄 소개
                </label>
                <textarea
                    id="briefIntroduction"
                    className="border rounded-[20px] p-4 flex-grow h-24 resize-none"
                />
            </div>
            <div className="flex gap-4">
                <label htmlFor="introduction" className="font-[700] w-20">
                    자기 소개
                </label>
                <textarea
                    id="introduction"
                    className="border rounded-[20px] p-4 flex-grow h-72 resize-none"
                />
            </div>
        </div>
    );
};

export default IntroduceForm;
