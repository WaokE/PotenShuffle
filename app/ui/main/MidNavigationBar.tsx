import { useMidNavigationStore } from "@/store/midNavigationStore";

import { SectionType } from "@/store/midNavigationStore";

export default function TopNavigationBar() {
    const { selectedSection, setSelectedSection } = useMidNavigationStore();

    const getNavItemStyles = (section: SectionType) => {
        if (selectedSection === section) {
            return {
                textDecoration: "underline",
                textDecorationColor: "purple",
                textDecorationThickness: "2px",
                textUnderlineOffset: "10px",
                backgroundColor: "white",
                color: "black",
            };
        }
        return {
            backgroundColor: "white",
            color: "black",
        };
    };

    return (
        <div className="flex justify-center items-center gap-16 w-full h-7.5%-screen p-4 border-solid border-b border-black-400">
            <span
                className="font-bold text-sm"
                onClick={() => {
                    setSelectedSection("personalCards");
                }}
                style={getNavItemStyles("personalCards")}
            >
                자기 소개 보기
            </span>
            <span
                className="font-bold text-sm"
                onClick={() => {
                    setSelectedSection("buildingTeams");
                }}
                style={getNavItemStyles("buildingTeams")}
            >
                빌딩 중인 그룹 보기
            </span>
        </div>
    );
}
