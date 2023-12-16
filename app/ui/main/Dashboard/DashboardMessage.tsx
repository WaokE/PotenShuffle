const DashboardMessage = () => {
    return (
        <div className="flex flex-col">
            <p className="font-[700]">나의 상태</p>
            <p className="text-[#828282]">
                <span className="font-[700]"> 빌딩 전</span> : 팀원을 찾는 상태 / 매칭 X
            </p>
            <p className="text-[#828282]">
                <span className="font-[700]"> 빌딩 중</span> : 제안을 수락하여 속한 팀이 있는 상태
            </p>
            <p className="text-[#828282]">
                <span className="font-[700]"> 빌딩 완료</span> : 팀원 모두가 수락한 상태 / 팀 매칭
                완료
            </p>
        </div>
    );
};

export default DashboardMessage;
