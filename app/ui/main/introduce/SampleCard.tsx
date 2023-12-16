import Card from "../Cards/Card";
import { userInfo } from "@/type/user";

const sampleCardData: userInfo = {
    user: {
        id: 1,
        name: "홍길동",
        teamBuildingStatus: "WAITING",
    },
    briefIntroduction: "안녕하세요. 저는 디자이너 홍길동입니다.",
    introduction:
        "안녕하세요. 저는 디자이너 홍길동입니다. 총 경력은 3년이며, 현재는 디자이너로 일하고 있습니다. 소통하는 것을 좋아하고, 새로운 것을 배우는 것을 좋아합니다.",
    employmentStatus: "CURRENTLY_WORKING",
    occupation: "DESIGNER",
    keywords: ["커뮤니케이션", "ESTP", "에너지"],
    createdAt: "2021-08-23T14:14:28.000Z",
    updatedAt: "2021-08-23T14:14:28.000Z",
};

const SampleCard = () => {
    return (
        <>
            <Card cardData={sampleCardData} />
        </>
    );
};

export default SampleCard;
