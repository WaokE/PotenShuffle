const DashBoardNavigation = () => {
    return (
        <div className="flex flex-col p-4 gap-4">
            <div className="w-full h-auto bg-white rounded-2xl shadow p-4 font-[700]">
                나의 자기 소개
            </div>
            <div className="flex w-full h-auto bg-white p-4 font-[700]">받은 제안</div>
            <div className="flex w-full h-auto bg-white p-4 font-[700]">보낸 제안</div>
        </div>
    );
};

export default DashBoardNavigation;
