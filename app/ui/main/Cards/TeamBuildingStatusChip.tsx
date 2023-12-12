type teamBuildingStatusChipProps = {
    teamBuildingStatus: string;
};

const teamBuildingStatusMessage = {
    WAITING: "빌딩 전",
    IN_PROGRESS: "빌딩 중",
    COMPLETED: "빌딩 완료",
};

const teamBuildingStatusColor = {
    WAITING: ["#8FA71E", "#E0F289"],
    IN_PROGRESS: ["#1EABAA", "#C6EDEC"],
    COMPLETED: ["#6C6C6C", "#D8D8D8"],
};

const TeamBuildingStatusChip: React.FC<teamBuildingStatusChipProps> = ({ teamBuildingStatus }) => {
    const message =
        teamBuildingStatusMessage[teamBuildingStatus as keyof typeof teamBuildingStatusMessage];

    const colors =
        teamBuildingStatusColor[teamBuildingStatus as keyof typeof teamBuildingStatusColor];

    return (
        <div
            className="flex justify-center items-center rounded-lg px-2 py-2 select-none bg-[$]"
            style={{ backgroundColor: colors[1], color: colors[0] }}
        >
            <p className="text-sm font-[700]">{message}</p>
        </div>
    );
};

export default TeamBuildingStatusChip;
