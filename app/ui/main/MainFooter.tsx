import Link from "next/link";

const MainFooter = () => {
    return (
        <div className="flex flex-col justify-center items-center text-[#FFFFFF] p-8 gap-4 bg-[#7A34F2] w-screen h-full mt-44 font-[400]">
            <p>Team CTRL Ⓒ All Rights Reserved</p>
            <Link href="https://elemental-chimpanzee-ca2.notion.site/CTRL-dbd4fea787884b5381fee8d8e51c331d">
                <p className="underline underline-offset-2">About us</p>
            </Link>
            <p>기획 박종헌 | 디자인 서정민 | 개발 이형준, 신문기</p>
        </div>
    );
};

export default MainFooter;
