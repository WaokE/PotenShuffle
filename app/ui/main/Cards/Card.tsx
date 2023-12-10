import Image from "next/image";

type CardData = {
    name: string | string[];
    role: string | string[];
    description: string | string[];
    keywords: string | string[];
};

const Card: React.FC<CardData> = ({ name, role, description, keywords }) => {
    return (
        <div className="flex flex-col p-4 gap-4 w-full h-1/2-screen border shadow-lg rounded-lg overflow-auto">
            <div className="flex justify-between items-center">
                <p className="text-2xl font-[700]">{name}</p>
                <Image src="/icon.png" alt="icon" width="20" height="20" />
            </div>
            <p className="font-[700]">{role}</p>
            {role === "designer" ? (
                <Image src="/_Type=3.png" alt="icon" width="100" height="20" />
            ) : null}
            {role === "FE developer" ? (
                <Image src="/_Type=2.png" alt="icon" width="100" height="20" />
            ) : null}
            {role === "BE developer" ? (
                <Image src="/_Type=4.png" alt="icon" width="100" height="20" />
            ) : null}
            {role === "product manager" ? (
                <Image src="/_Type=1.png" alt="icon" width="100" height="20" />
            ) : null}
            <p>{description}</p>
            <div className="flex flex-wrap gap-2">
                {keywords.map((keyword) => (
                    <div className="bg-gray-200 rounded-full p-2">{keyword}</div>
                ))}
            </div>
        </div>
    );
};

{
    /* <div className="w-full h-1/3-screen border shadow-lg rounded-lg"> */
}

export default Card;
